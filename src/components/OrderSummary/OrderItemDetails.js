import React, { useState } from 'react'
import { Button, Collapse, Card, Row, Col, Container } from 'react-bootstrap';
import { connect } from 'react-redux';

const OrderItemDetails = (props) => {
    const [open, setOpen] = useState(false);
    return (
        <Container>
            <Button
                onClick={() => setOpen(!open)}
                aria-expanded={open}
            >
                { open && <div className = 'buttonText'>Hide Item Details -</div> }
                { !open && <div className = 'buttonText'>See Item Details +</div> }
            </Button>
            <Collapse in={open}>
                <Card className = 'orderItemDetails__card' style={{ width: '21rem' }}>
                    <Row className = 'orderItemDetails__cardHeader'>
                        <Col className = 'orderItemDetails__image'>
                            <img src={props.image} alt='item ordered'/>
                        </Col>
                        <Col className = 'orderItemDetails__price'>${props.subtotal}</Col>
                    </Row>
                    <Card.Body className = 'orderItemDetails__description'>{props.description}</Card.Body>
                </Card>
            </Collapse>
            <hr></hr>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        image: state.image,
        description: state.description,
        subtotal: state.subtotal
    }
}

export default connect(mapStateToProps)(OrderItemDetails)
