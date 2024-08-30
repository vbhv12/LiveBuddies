import { db } from '@/lib/db';
import { initialProfile } from '@/lib/initial-profile';
import React from 'react'

const SetUp = async() => {
    const profile = await initialProfile();

    const server = await db.server.

    return (
        <div>Create a Server</div>
    )
}

export default SetUp