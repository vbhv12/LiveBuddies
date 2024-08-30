import { initialProfile } from '@/lib/initial-profile';
import React from 'react'

const SetUp = async() => {
    const profile = await initialProfile();
  return (
    <div>Create a Server</div>
  )
}

export default SetUp