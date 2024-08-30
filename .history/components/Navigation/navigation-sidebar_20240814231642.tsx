import { currentProfile } from '@/lib/current-profile'
import React from 'react'

const NavigationSidebar = () => {
    const profile = await currentProfile();
  return (
    <div>navigation-sidebar</div>
  )
}

export default NavigationSidebar