import { APPLY_PROMOCODE } from '../actions/actionTypes'

const initialState = {
    image: 'https://images-na.ssl-images-amazon.com/images/I/51tGaNC7lqL.jpg',
    description: "PINK PARROT Dupion Silk Cushion Cover (Multicolour, 16x16 inches) - Set of 5, Some quick example text to build on the card title and make up the bulk of the card's content.",
    subtotal: 102.96,
    pickupSaving: 3.83
}

const orderSummaryReducer = (state = initialState, action) => {
    switch (action.type){
        case APPLY_PROMOCODE:
            var result =  Object.assign({}, state)
            var newSubtotal = parseFloat(result.subtotal * 0.9).toFixed(2)
            result.subtotal = newSubtotal
            return result
        default: return state
    }
}

export default orderSummaryReducer