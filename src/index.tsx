import React, { useEffect, useRef } from 'react';

//@ts-ignore
import Skycons from './skycons/skycons';

export enum SkyconType {
  CLEAR_DAY = 'CLEAR_DAY',
  CLEAR_NIGHT = 'CLEAR_NIGHT',
  PARTLY_CLOUDY_DAY = 'PARTLY_CLOUDY_DAY',
  PARTLY_CLOUDY_NIGHT = 'PARTLY_CLOUDY_NIGHT',
  CLOUDY = 'CLOUDY',
  RAIN = 'RAIN',
  SHOWERS_DAY = 'SHOWERS_DAY',
  SHOWERS_NIGHT = 'SHOWERS_NIGHT',
  SLEET = 'SLEET',
  RAIN_SNOW = 'RAIN_SNOW',
  RAIN_SNOW_SHOWERS_DAY = 'RAIN_SNOW_SHOWERS_DAY',
  RAIN_SNOW_SHOWERS_NIGHT = 'RAIN_SNOW_SHOWERS_NIGHT',
  SNOW = 'SNOW',
  SNOW_SHOWERS_DAY = 'SNOW_SHOWERS_DAY',
  SNOW_SHOWERS_NIGHT = 'SNOW_SHOWERS_NIGHT',
  WIND = 'WIND',
  FOG = 'FOG',
  THUNDER = 'THUNDER',
  THUNDER_RAIN = 'THUNDER_RAIN',
  THUNDER_SHOWERS_DAY = 'THUNDER_SHOWERS_DAY',
  THUNDER_SHOWERS_NIGHT = 'THUNDER_SHOWERS_NIGHT',
  HAIL = 'HAIL',
}

export interface ColorableParts {
  sun?: string;
  moon?: string;
  light_cloud?: string;
  cloud?: string;
  dark_cloud?: string;
  rain?: string;
  snow?: string;
  thunder?: string;
  wind?: string;
  leaf?: string;
  hail?: string;
  sleet?: string;
  fog?: string;
}

export interface Props extends Omit<React.CanvasHTMLAttributes<HTMLCanvasElement>, 'color'> {
  icon: SkyconType;
  color: ColorableParts | string;
  size: number;
  animate?: boolean;
  resizeClear?: boolean; // it is recommended by skycons authors to make resizeClear always true
}

export const ReactSkycon: React.FC<Props> = ({
  icon = SkyconType.CLEAR_DAY,
  color = 'gold',
  size = 128,
  animate = true,
  resizeClear = true,
  height, // grab height and width here to not override our canvas width and height being set to 'size'
  width,
  ...props
}) => {
  const skyconCanvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const skycon = new Skycons({ color, resizeClear });

    skycon.add(skyconCanvas.current, icon);
    if (animate) {
      skycon.play();
    }

    return () => {
      // on each re-render pause and remove skycon to make sure animation is on/off
      skycon.pause();
      skycon.remove();
    };
  }, [icon, color, size, animate, resizeClear]);

  return (
    <canvas ref={skyconCanvas} width={size} height={size} {...props}></canvas>
  );
};
