import * as React from 'react';
import { withStyles } from 'material-ui/styles';
import withRoot from './withRoot';
const styles = {
  main: {
    backgroundColor: 'blue'
  }
};

export class App extends React.Component<any, any> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className={""}>
          To get started, edit <code>src/App.js</code> and save to
          reload.
        </p>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(App)) as any;
