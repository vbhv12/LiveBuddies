import { currentProfile } from '@/lib/current-profile'
import { db } from '@/lib/db';
import { redirect } from 'next/navigation';
import React from 'react'

const NavigationSidebar = async () => {
    const profile = await currentProfile();

    if(!profile){
        return redirect('/');
    }

    const servers = await db.ser
    return (
        <div>navigation-sidebar</div>
    )
}

export default NavigationSidebar