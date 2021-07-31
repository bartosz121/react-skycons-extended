import React from 'react';

import { Meta, Story } from '@storybook/react';
import { ReactSkycon, Props } from '../src';

import SkyconType from '../src/SkyconType';

const meta: Meta = {
  component: ReactSkycon,
  title: 'ReactSkycon',
  argTypes: {
    color: {
      description:
        'Can be either one string color for whole icon or object with individual parts presented in an icon, example of this can be seen in "Colorable Parts Example" story. All avaliable parts to colorize can be seen in ColorableParts interface.',
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <ReactSkycon {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: SkyconType.CLEAR_DAY,
  color: 'gold',
  size: { width: 128, height: 128 },
  animate: true,
  resizeClear: true,
};

export const ColorablePartsExample = Template.bind({});
ColorablePartsExample.args = {
  icon: SkyconType.THUNDER_SHOWERS_DAY,
  color: {
    sun: 'gold',
    thunder: 'red',
    rain: 'blue',
    dark_cloud: 'green',
  },
  size: { width: 128, height: 128 },
  animate: true,
  resizeClear: true,
};
