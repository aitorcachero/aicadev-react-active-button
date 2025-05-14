import './App.css';
import './styles.css';
import { ActiveButton } from './components/ActiveButton';

function App() {
  console.log('???');
  return (
    <>
      <ActiveButton />
      <p style={{ color: 'red' }}>Hola mundo</p>
    </>
  );
}

export default App;
