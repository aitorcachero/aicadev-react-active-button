import React, { useState } from 'react';

export default function ActiveButton() {
  const [active, setActive] = useState(false);
  return (
    <div className="active-button">
      <div className="button-ball"></div>
    </div>
  );
}
