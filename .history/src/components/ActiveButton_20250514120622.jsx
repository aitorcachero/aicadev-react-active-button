import React, { useRef, useState, useCallback } from 'react';

export default function ActiveButton({ width = 800, activated = false }) {
  const [active, setActive] = useState(activated);
  const buttonRef = useRef(null);

  const handleCalculateHeightAndWidthBall = useCallback(() => {
    return const calculateHeigthBall = () => {
      return parseInt(width / 8);
    };
  }, [width]);

  const handleClick = () => {
    setActive(!active);
    active
      ? buttonRef?.current?.classList.remove('activatedButton')
      : buttonRef?.current?.classList.add('activatedButton');
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
          height: `${handleCalculateHeightAndWidthBall()}px`,
          position: 'absolute',
          left: active
            ? `${width - handleCalculateHeightAndWidthBall() - 4}px`
            : '4px',
          bottom: 0,
          transition: 'left 1s ease-in-out, background-color 1s ease-in-out',
        }}
      ></div>
    </div>
  );
}
