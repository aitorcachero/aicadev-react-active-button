import React, { useRef, useState } from 'react';

export default function ActiveButton({ activated = false }) {
  const [active, setActive] = useState(activated);
  const buttonRef = useRef(null);

  const handleClick = () => {};
  return (
    <div className="active-button">
      <div className="button-ball" ref={buttonRef}></div>
    </div>
  );
}
