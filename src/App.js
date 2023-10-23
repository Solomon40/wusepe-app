
import { useState } from 'react';
import RegisterComponent from './components/Register';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  //for the love of UX

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (value) => {
    // Updating the h1 firtname with the input value
    setInputValue(value);
  };

  return (
    <div className="App">

      <h1 className='App-header mb-3'>Email notification for <span className='unique-name'>{inputValue}</span></h1>
      <RegisterComponent onInputChange={handleInputChange} />
    </div >
  );
}

export default App;
