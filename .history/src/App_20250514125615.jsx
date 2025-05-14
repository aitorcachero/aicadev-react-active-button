import './App.css';
import './styles.css';
import ActiveButton from './components/ActiveButton';

function App() {
  const [active, setActive] = useState(false);
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ActiveButton active={active} />
    </div>
  );
}

export default App;
