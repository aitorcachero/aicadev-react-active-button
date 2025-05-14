import React, { useRef, useState } from 'react';

export default function ActiveButton({ width = '50px', activated = false }) {
  const [active, setActive] = useState(activated);
  const buttonRef = useRef(null);

  const handleClick = () => {
    setActive(!active);
    active
      ? buttonRef?.current?.classList.remove('activatedButton')
      : buttonRef?.current?.classList.add('activatedButton');
  };

  const handleCalculateHeightAndWidth = () => {
    return {
      height: parseInt(width),
      width: parseInt(width * 3),
    };
  };
  return (
    <div
      className="active-button"
      onClick={handleClick}
      style={{ width: `${width}px` }}
    >
      <div
        className="button-ball"
        ref={buttonRef}
        style={{
          width: `${handleCalculateHeight()}px`,
          left: active ? `${handleCalculateWidth}px` : '4px',
          transition: 'left 1s ease-in-out, background-color 1s ease-in-out',
        }}
      ></div>
    </div>
  );
}
