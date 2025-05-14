import React, { useRef, useState } from 'react';

export default function ActiveButton({ activated = false }) {
  const [active, setActive] = useState(activated);
  const buttonRef = useRef(null);

  const handleClick = () => {
    setActive(!active);
    active
      ? buttonRef.current.classList.remove('activatedButton')
      : buttonRef.current.classList.add('activatedButton');
  };
  return (
    <div className="active-button" onClick={handleClick}>
      <div 
        className="button-ball" 
        ref={buttonRef}
        style={{
          left: active ? 'calc(100% - 100% + 4px)' : '4px',
          transition: 'left 1s ease-in-out, background-color 1s ease-in-out'
        }}
      ></div>
    </div>
  );
}
