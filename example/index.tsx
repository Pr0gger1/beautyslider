import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { Thing } from '../.';
import {Slider} from "../src";

const App = () => {
  return (
    <div>
      <Slider variant='duo' />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
