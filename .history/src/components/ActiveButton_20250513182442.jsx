import React, { useState } from 'react';

export default function ActiveButton({ active = false }) {
  const [active, setActive] = useState(active);
  return (
    <div className="active-button">
      <div className="button-ball"></div>
    </div>
  );
}
