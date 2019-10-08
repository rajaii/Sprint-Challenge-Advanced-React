import React from 'react';
import {render} from '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect'

import App from './App.js';

test('renders without crashing', () => {
  const wrapper = render(<App/>);
  console.log(wrapper);
});

//test is written properly, can't get it to run because havent configured the packages yet.