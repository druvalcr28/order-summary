import React from 'react'
import { Container, Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { connect } from 'react-redux';
import { calcTax, calcTotal } from '../../selectors/orderSummary'

const OrderHeader = (props) => {
    return (
        <div className = 'orderHeader'>
            <Container>
                <Row className = 'orderHeader__infoLeft'>
                    <Col>Subtotal</Col>
                    <Col className = 'orderHeader__price'>${props.subtotal}</Col>
                </Row>
                <Row className = 'orderHeader__infoLeft'>
                    <Col style={{textDecoration: "underline"}}>
                        <OverlayTrigger
                            placement="bottom"
                            overlay={<Tooltip id="pickupSavings-tooltip">Picking up your order from the store helps to reduce the travel cost</Tooltip>}
                        >
                            <div>Pickup Savings</div>
                        </OverlayTrigger>
                    </Col>
                    <Col style={{color: "red"}} className = 'orderHeader__price'>-${props.pickupSaving}</Col>
                </Row>
                <Row className = 'orderHeader__infoLeft'>
                    <Col>Estimated Taxes & fees</Col>
                    <Col className = 'orderHeader__price'>${props.tax}</Col>
                </Row>
                <hr></hr>
                <Row className = 'orderHeader__estTotal'>
                    <Col style={{fontSize: "1.5rem", fontWeight: "bold"}}>Est. total</Col>
                    <Col style={{fontSize: "1.5rem"}} className = 'orderHeader__price'>${props.total}</Col>
                </Row>
                <hr></hr>
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        subtotal: state.subtotal,
        pickupSaving: state.pickupSaving,
        tax: calcTax(state.subtotal),
        total: calcTotal(state.subtotal, state.pickupSaving)
    }
}

export default connect(mapStateToProps)(OrderHeader)
