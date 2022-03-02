import React from "react";
import { Button, Menu } from "semantic-ui-react";

interface Props {
    openForm: () => void;
}

export default function NavBar({openForm}: Props){
    return(
        <Menu inverted fixed="top">
            <Menu.Item>
                <img src="/assets/logo.png" alt="logo" style={{ width: 30, height: 30}}/>
                Reactivities
            </Menu.Item>
            <Menu.Item name="Activities" />
            <Menu.Item>
                <Button onClick={openForm} positive content="Create Activity"></Button>
            </Menu.Item>
        </Menu>
    )
}