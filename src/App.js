import './App.css';
import './images/CNC.png';
import Calculator from './Calculator';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
    <div className="bg">
       <Calculator />
    </div>
    </ChakraProvider>
  );
}

export default App;
 
//