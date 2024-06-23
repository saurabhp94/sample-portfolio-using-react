import { BrowserRouter } from 'react-router-dom';
import MainApp from './MainApp'
import { ThemeProvider } from './theme/ThemeContext.jsx';
import './App.css';


function App(children) {
  return (
    <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <ThemeProvider>
          <MainApp />
          </ThemeProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
