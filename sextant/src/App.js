import React from 'react';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';

const App = () => {
  return (
    <div>
      <Banner />
      <Exhibit heading="Example Exhibit">
        <p>This is the content of the exhibit component.</p>
        <button>Click me</button>
      </Exhibit>
    </div>
  );
};

export default App;
