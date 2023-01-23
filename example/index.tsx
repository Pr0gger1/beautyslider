import 'react-app-polyfill/ie11';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Slider} from "../src";
import './styles.css';

const App = () => {
  return (
    <main>
        <h1>Slider react component</h1>
        <section className='slider__section'>
            <div className='default'>
                <h3>Default slider</h3>
                <Slider/>
                <Slider checked={true}/>
            </div>

            <div className='duo'>
                <h3>Duo slider</h3>
                <Slider variant="duo"/>
                <Slider variant='duo caption' checked={true}/>
            </div>

            <div className='dark'>
                <h3>Dark slider</h3>
                <Slider variant='dark'/>
                <Slider variant='dark' checked={true}/>
            </div>

        </section>
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
