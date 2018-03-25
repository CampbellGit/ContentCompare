import React, { Component } from 'react';
import Comparer from './Comparer'
import styles from './styles.css'

class App extends Component {
    render() {
      return (
    <div>
      
      <div className={styles.body}>
        <div className={styles.card}>
          <Comparer/>
        </div>
      </div>
    </div>
  )
}
}

export default App;