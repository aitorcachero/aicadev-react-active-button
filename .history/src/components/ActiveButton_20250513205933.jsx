import React, { useRef, useState, useCallback } from 'react';

export default function ActiveButton({ width = '150px', activated = false }) {
  const [active, setActive] = useState(activated);
  const buttonRef = useRef(null);

  const handleClick = () => {
    setActive(!active);
    active
      ? buttonRef?.current?.classList.remove('activatedButton')
      : buttonRef?.current?.classList.add('activatedButton');
  };

  const handleCalculateHeightAndWidth = useCallback(() => {
    return {
      height: parseInt(width / 3),
      width: parseInt(width),
    };
  }, [width]);

  return (
    <div
      className="active-button"
      onClick={handleClick}
      style={{ width: `${handleCalculateHeightAndWidth().width}px` }}
    >
      <div
        className="button-ball"
        ref={buttonRef}
        style={{
          width: `${handleCalculateHeightAndWidth().height}px`,
          left: active ? `${handleCalculateHeightAndWidth().width}px` : '4px',
          transition: 'left 1s ease-in-out, background-color 1s ease-in-out',
        }}
      ></div>
    </div>
  );
}
