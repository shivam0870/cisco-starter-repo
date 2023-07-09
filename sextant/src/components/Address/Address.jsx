// import React, { Component } from 'react';

// class AddressDisplay extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             url: props.url,
//             ipAddress: null
//         };
//     }

//     componentDidMount() {
//         fetch(this.state.url)
//             .then(response => response.json())
//             .then(data => this.setState({ ipAddress: data.ip }));
//     }

//     render() {
//         return (
//             <span className="AddressDisplay">
//                 {this.state.ipAddress}
//             </span>
//         );
//     }
// }

// export default AddressDisplay;



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
