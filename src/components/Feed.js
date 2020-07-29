import React from 'react'
import { Container, Row, Col } from 'react-materialize'

function Feed() {
    return (
        <div>
            <Container>
                <Row>
                    <Col s={12} m={4}>Profile</Col>
                    <Col s={12} m={8}>feed</Col>

                </Row>
            </Container>
        </div>
    )
}

export default Feed
