import React from 'react'
import Card from 'react-bootstrap/Card';
import '../../styles/orderSummary.css'
import OrderHeader from './OrderHeader'
import OrderItemDetails from './OrderItemDetails'
import OrderPromoCode from './OrderPromoCode'

const OrderSummary = () => {
    return (
        <div className = 'orderSummary'>
            <Card className = 'orderSummary__card'>
                <Card.Body>
                    <OrderHeader />
                    <OrderItemDetails />
                    <OrderPromoCode />
                </Card.Body>
            </Card>
        </div>
    )
}

export default OrderSummary
