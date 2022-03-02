import React from "react";
import { Card, Image, Icon, Button } from "semantic-ui-react";
import { IActivity } from "../../../models/activity";

interface Props {
    activity : IActivity;
    cancelSelectActivity: () => void;
    openForm: (id: string) => void;
}

export default function ActivityDetails({activity, cancelSelectActivity, openForm}: Props){
    return(
        <Card fluid>
            <Image src={`/assets/categoryImages/${activity.catagory}.jpg`}/>
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>{activity.date}</Card.Meta>
                <Card.Description>{activity.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button onClick={() => openForm(activity.id)} basic color="blue" content="Edit"></Button>
                    <Button onClick={cancelSelectActivity} basic color="grey" content="Cancel"></Button>
                </Button.Group>

            </Card.Content>
        </Card>
    )
}