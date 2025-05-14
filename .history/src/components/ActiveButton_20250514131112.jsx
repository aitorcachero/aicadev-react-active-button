import React, { useRef, useMemo } from 'react';

export default function ActiveButton({
  active = false,
  width = 200,
  transition = 1000,
}) {
  const buttonRef = useRef(null);

  const handleCalculateHeightAndWidthBall = useMemo(
    () => parseInt(width / 4)[width]
  );

  const handleClick = () => {
    active
      ? buttonRef?.current?.classList.remove('activatedButton')
      : buttonRef?.current?.classList.add('activatedButton');
  };

  const calcPadding = useMemo(() => width / 4 / 10, [width]);

  return (
    <div
      className="active-button"
      onClick={handleClick}
      style={{
        width: `${width}px`,
        borderRadius: `${width / 2}px`,
        paddingTop: `${calcPadding}px`,
        paddingBottom: `${calcPadding}px`,
      }}
    >
      <div
        className="button-ball"
        ref={buttonRef}
        style={{
          height: `${handleCalculateHeightAndWidthBall()}px`,
          position: 'absolute',
          left: active
            ? `${width - handleCalculateHeightAndWidthBall() - calcPadding}px`
            : `${calcPadding}px`,
          top: '50%',
          transform: 'translateY(-50%)',
          transition: `left ${
            transition / 1000
          }s ease-in-out, background-color ${transition / 1000}s ease-in-out`,
        }}
      ></div>
    </div>
  );
}
