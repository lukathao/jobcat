import { XataApiClient } from '@xata.io/client'

const xataApiClient = new XataApiClient({
  apiKey: process.env.XATA_API_KEY,
});

export default xataApiClient