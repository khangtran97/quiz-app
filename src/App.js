import React from 'react';

import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Getstarted from './components/Getstarted/Getstarted';
import Acknowledgement from './components/Acknowlege/Acknowlege';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{display: 'block', textAlign: 'center'}}>
        {/* <Form /> */}
        {/* <Getstarted /> */}
        <Acknowledgement />
      </div>
    </div>
  );
}

export default App;
