import React from 'react';
import { render } from 'react-dom';
import Home from './components/organisms/home';

require('../css/main.scss');

render(<Home />, document.querySelector('#root'));
