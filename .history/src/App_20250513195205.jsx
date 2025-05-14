import './App.css';
import './styles.css';
import ActiveButton from './components/ActiveButton';

function App() {
  console.log('render');
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ActiveButton />
    </div>
  );
}

export default App;
