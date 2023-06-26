import React from 'react';

const Notification = ({ message, children }) => {
  return (
    <div>
      <p>{message}</p>
      {children}
    </div>
  );
};

export default Notification;
