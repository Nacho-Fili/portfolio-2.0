import React from 'react'
import { ComponentMeta } from '@storybook/react'
import NavBarItem from '.'
import NavbarOption from './types'
import '../../../font.css'

export default {
    title: 'atoms/NavBarItem',
    component: NavBarItem,
} as ComponentMeta <typeof NavBarItem>

const item: NavbarOption = {
    title: 'Home',
    href: '/home',
}

export const Dark = () => 
    <ul style={{ listStyleType: 'none' }}>
        <NavBarItem collapsed={false} item={item}/>
    </ul>

export const DarkCollapsed = () => 
    <ul style={{ listStyleType: 'none' }}>
        <NavBarItem collapsed={true} item={item}/>
    </ul>