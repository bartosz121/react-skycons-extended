import React from 'react';
import * as ReactDOM from 'react-dom';
import { ReactSkycon } from '../src';

import { SkyconType } from '../src';

const props = {
  icon: SkyconType.CLEAR_DAY,
  color: "gold",
  size: {width: 128, height: 128},
  animate: true,
  resizeClear: true
}

describe('ReactSkycon', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ReactSkycon {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
