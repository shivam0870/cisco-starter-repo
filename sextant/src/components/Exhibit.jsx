import React from 'react';

const Exhibit = ({ heading, children }) => {
  return (
    <div className="exhibit">
      <h2>{heading}</h2>
      {children}
    </div>
  );
};

export default Exhibit;
