import './styles/App.scss';
import './styles/index.css';
import EstiloGlobal from './styles/styles.jsx';
import Navbar from './components/Navbar';
import ContainerEx from './components/Colu';

function App() {
  return (
    <div className="App">
      <EstiloGlobal/>
      <Navbar />
      <ContainerEx />
      <header className="App-header">
        <h1 className='bg-red-300'>TODO</h1>
      </header>
    </div>
  );
}

export default App;
