import React from 'react'
import NavigationBar from './NavigationBar'
import FlashMessagesList from './FlashMessagesList'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <FlashMessagesList />
        <NavigationBar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
