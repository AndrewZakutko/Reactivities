import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Menu } from "semantic-ui-react";

export default function NavBar(){
    return(
        <Menu inverted fixed="top">
            <Menu.Item exact as={NavLink} to='/' name="Reactivities" />
            <Menu.Item as={NavLink} to='/activities' name="Activities" />
            <Menu.Item as={NavLink} to='/errors' name="Errors" />
            <Menu.Item>
                <Button as={NavLink} to='/createActivity' positive content="Create Activity"></Button>
            </Menu.Item>
        </Menu>
    )
}