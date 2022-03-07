import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Header, Segment } from "semantic-ui-react";

export default function HomePage() {
    return(
        <Segment textAlign="center" inverted vertical className="masthead">
            <Container>
                <Header as='h1' inverted>
                    Reactivities
                </Header>
                <Header as='h2' inverted content='Welcome to Reactivities' />
                <Button as={Link} to='/activities' size="huge" inverted>
                    Take me to Activities!  
                </Button>
            </Container>
        </Segment>
    )
}