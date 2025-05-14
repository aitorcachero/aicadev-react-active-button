import React from 'react';

export default function ActiveButton() {
  const [active, setActive] = React.useState(false);
  return (
    <div className="active-button">
      <div className="button-ball"></div>
    </div>
  );
}
