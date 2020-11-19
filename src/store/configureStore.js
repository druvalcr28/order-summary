import { createStore } from 'redux';
import orderSummaryReducer from '../reducers/orderSummary';


// Store creation
const store = createStore(orderSummaryReducer)

export default store