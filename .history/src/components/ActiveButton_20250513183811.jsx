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
    <div
      className="active-button"
      onClick={handleClick}
      style={{ 
        justifyContent: active ? 'flex-end' : 'flex-start',
        transition: 'justify-content 0.3s ease-in-out'
      }}
    >
      <div className="button-ball" ref={buttonRef}></div>
    </div>
  );
}
