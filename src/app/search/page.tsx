import React from 'react'
import { getRemoteJobByName } from '../server/search';
import DisplayJob from '../components/ui/displayJob';

const SearchResults = async (role) => {
  const jobs = await getRemoteJobByName(role);

  return (
    <>
      {
        jobs.records.map(job => {
          <DisplayJob job={job} />
        })
      }
    </>
  )
}

export default SearchResults