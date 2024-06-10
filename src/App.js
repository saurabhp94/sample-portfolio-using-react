import { BrowserRouter } from 'react-router-dom';
import MainApp from './MainApp';
import './App.css';

function App() {
  return (
    <div className="App">
<BrowserRouter>
<MainApp />
</BrowserRouter>
    </div>
  );
}

export default App;
