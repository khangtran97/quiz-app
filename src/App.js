import React from 'react';

import Header from './components/Header/Header';
import Form from './components/Form/Form';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{display: 'block', textAlign: 'center'}}>
        <Form />
      </div>
    </div>
  );
}

export default App;
