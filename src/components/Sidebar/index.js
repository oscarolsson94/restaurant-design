import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarElements';

const Siebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/" >Pizzas</SidebarLink>
                <SidebarLink to="/" >Desserts</SidebarLink>
                <SidebarLink to="/" >Full Menu</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Order now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    );
}

export default Siebar;
