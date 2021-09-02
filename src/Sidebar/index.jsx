import React from 'react'
import { 
    CloseIcon, 
    Icon, 
    SidebarContainer, 
    SidebarLink, 
    SidebarMenu, 
    SidebarRoute, 
    SidebarWrapper,
    SideBtnWrap
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="home" onClick={toggle}> Home
                    </SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>About
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>Services
                    </SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>Contact
                    </SidebarLink>
                    <SidebarLink to="feedback" onClick={toggle}>FeedBack                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/login">Login</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
