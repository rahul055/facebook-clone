import React from 'react'
import { Container, Row, Col } from 'react-materialize'

function Feed() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>Profile</Col>
                    <Col>feed</Col>
                    <Col>empty</Col>
                </Row>
            </Container>
        </div>
    )
}

export default Feed
