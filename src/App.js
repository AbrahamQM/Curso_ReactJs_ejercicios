import logo from './logo.svg';
import './App.css';
import ComponenteA from './components/ComponenteA';

function App() {
  const contactoYo = {
    nombre: 'Abraham',
    apellido: 'Quintana',
    email: 'abraham@abraham.com',
    conectado: false
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponenteA contacto={contactoYo}></ComponenteA>
        
        
      </header>
    </div>
  );
}

export default App;
