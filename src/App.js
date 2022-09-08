import React from 'react';
import './App.css';
import './css/bootstrap.min.css';
import Creditcard from './components/Creditcard';

//const [modalShow, setModalShow] = useState(false);

/*const [request, setRequest] = useState(
  {
    cardNumber: "string",
    expirationDate: "string",
    cardCode: 1,
    amount: 1
  },
);*/

function App() {
  return (
    <div className="App">
      <h1 className='App-h1'>PAGO CON TARJETA</h1>

      <Creditcard />
    </div>
  );
}

export default App;
