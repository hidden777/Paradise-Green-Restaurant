import React from "react";
import {
  SidebarContainer,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  Icon,
  CloseIcon,
  SidebarRoute
} from "./SidebarElements";

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} >
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/starters">Starters</SidebarLink>
        <SidebarLink to="/desserts">Desserts</SidebarLink>
        <SidebarLink to="/full-course">Full Course</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to="/">Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
