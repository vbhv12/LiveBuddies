import { currentProfile } from '@/lib/current-profile'
import React from 'react'

const NavigationSidebar = async () => {
    const profile = await currentProfile();
    return (
        <div>navigation-sidebar</div>
    )
}

export default NavigationSidebar