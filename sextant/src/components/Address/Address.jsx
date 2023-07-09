

import React, { useEffect, useState } from 'react';

const AddressDisplay = ({ url }) => {
  const [ipAddress, setIPAddress] = useState(null);

  useEffect(() => {
    const fetchIPAddress = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setIPAddress(data.ip);
      } catch (error) {
        console.error('Error fetching IP address:', error);
      }
    };

    fetchIPAddress();
  }, [url]);

  return <span className="AddressDisplay">{ipAddress}</span>;
};

export default AddressDisplay;
