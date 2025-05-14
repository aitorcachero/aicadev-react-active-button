import React, { useState } from 'react';

export default function ActiveButton({ activated = false }) {
  const [active, setActive] = useState(activated);
  return (
    <div className="active-button">
      <div className="button-ball"></div>
    </div>
  );
}
