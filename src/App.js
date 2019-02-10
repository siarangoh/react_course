import React, { Component } from 'react';
import MyComponent from '../src/components/myComponent'

class App extends Component {
  render() {
    return (
      <div>
        <MyComponent greeting={'Hola Mundo desde una prop'}/>
      </div>
    );
  }
}

export default App;
