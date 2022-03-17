import { observer } from "mobx-react-lite";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Dropdown, Icon, Image, Menu } from "semantic-ui-react";
import { useStore } from "../stores/store";

export default observer(function NavBar(){
    const {userStore: {user, logout}} = useStore();
    return(
        <Menu inverted fixed="top">
            <Menu.Item exact as={NavLink} to='/'>
                <Icon name="users" />Reactivities
            </Menu.Item>
            <Menu.Item as={NavLink} to='/activities' name="Activities" />
            <Menu.Item as={NavLink} to='/errors' name="Errors" />
            <Menu.Item>
                <Button as={NavLink} to='/createActivity' positive content="Create Activity"></Button>
            </Menu.Item>
            <Menu.Item>
                <Image src={user?.image || '/assets/user.png'} avatar spaced="right"/>
                <Dropdown pointing="top left" text={user?.displayName}>
                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to={`/profiles/${user?.username}`} text="My profile" icon="user"/>
                        <Dropdown.Item onClick={logout} text="Logout" icon="power"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </Menu>
    )
})