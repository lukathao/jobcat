import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import React from 'react'

const ClerkHeader = () => {
  return (
    <header className='flex justify-end p-4 absolute top-0 left-0 right-0 z-50'>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton showName />
      </SignedIn>
    </header>
  )
}

export default ClerkHeader