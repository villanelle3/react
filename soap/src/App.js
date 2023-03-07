import './styles/App.scss';
import EstiloGlobal from './styles/styles.jsx';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <EstiloGlobal/>
      <Navbar />
      <header className="App-header">
        <h1>TODO</h1>
      </header>
    </div>
  );
}

export default App;
