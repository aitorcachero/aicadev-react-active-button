import React, { useRef, useState, useCallback } from 'react';

export default function ActiveButton({ width = 800, activated = false }) {
  const [active, setActive] = useState(activated);
  const buttonRef = useRef(null);

  const handleCalculateHeightAndWidthBall = useCallback(() => {
    const calculateHeigthBall = () => {
      return parseInt(width / 8);
    };
  }, [width]);

  const handleClick = () => {
    console.log(handleCalculateHeightAndWidth().height);
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
          width: `${handleCalculateHeightAndWidth().height}px`,
          height: '100%',
          position: 'absolute',
          left: active
            ? `${
                handleCalculateHeightAndWidth().width -
                handleCalculateHeightAndWidth().height
              }px`
            : '4px',
          bottom: 0,
          transition: 'left 1s ease-in-out, background-color 1s ease-in-out',
        }}
      ></div>
    </div>
  );
}
