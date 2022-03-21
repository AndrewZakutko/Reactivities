import { observer } from "mobx-react-lite";
import React from "react";
import Calendar from "react-calendar";
import { Header, Menu } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";

export default observer(function ActivityFilters(){
    const {activityStore: {predicate, setPredicate}} = useStore();

    return(
        <>
            <Menu vertical size="large" style={{width: '83%', marginTop: 35}}>
                <Menu.Item>
                    <Header icon="filter" color="teal" content="Filters"/>
                </Menu.Item>
                <Menu.Item 
                    content='All Activities' 
                    active={predicate.has('all')}
                    onClick={() => setPredicate('all', 'true')}
                />
                <Menu.Item 
                    content="I'm going"
                    active={predicate.has('isGoing')}
                    onClick={() => setPredicate('isGoing', 'true')}
                />
                <Menu.Item 
                    content="I'm hosting" 
                    active={predicate.has('isHosting')}
                    onClick={() => setPredicate('isHosting', 'true')}
                />
            </Menu>
            <Header />
            <Calendar 
                onChange={(date : Date) => setPredicate('startDate', date)}
                value={predicate.get('startDate') || new Date()}
            />
        </>
    )
})