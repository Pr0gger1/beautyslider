import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Slider } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Slider />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
