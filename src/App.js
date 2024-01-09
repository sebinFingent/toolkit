import './App.scss';
import {LoaderProvider} from './components/loader/loaderContext';

import { BrowserRouter } from 'react-router-dom';
import Router from './routes';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <LoaderProvider>
          <BrowserRouter>
              <Router/>
          </BrowserRouter>
        </LoaderProvider>
      </div>
    </div>
  );
}

export default App;
