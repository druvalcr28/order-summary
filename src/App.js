import './App.css';
import OrderSummary from './components/OrderSummary/OrderSummary'
import { Provider } from 'react-redux'
import store from './store/configureStore'

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <OrderSummary />
      </div>
    </Provider>
  );
}

export default App;
