import { BrowserRouter } from 'react-router-dom';
import MainApp from './MainApp';
import './App.css';

function App() {
  return (
    <div className="App">
<BrowserRouter basename={process.env.PUBLIC_URL}>
<MainApp />
</BrowserRouter>
    </div>
  );
}

export default App;
