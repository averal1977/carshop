import './App.css';
import {AppProviderUi} from './AppProviderUi';
import {AppNavigate} from './AppNavigate';

function App () {
  return (
    <AppProviderUi>
      <div className="App">
      <h1>TALLER AUTOMOTRIZ ALEX VERA & ASOCIADOS</h1>  
        <AppNavigate />
      </div>
    </AppProviderUi>
  );
}

export default App;