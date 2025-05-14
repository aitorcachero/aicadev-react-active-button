import './App.css';
import './styles.css';
import ActiveButton from './components/ActiveButton';
import { useState } from 'react';

function App() {
  const [active, setActive] = useState(false);
  return (
    <
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >

        <ActiveButton
          active={active}
          width={200}
          transition={500}
          onClick={() => setActive(!active)}
        />

    </div>
  );
}

export default App;
