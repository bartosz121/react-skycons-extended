import React, { useEffect, useRef } from 'react';

//@ts-ignore
import Skycons from './skycons/skycons';

import SkyconType from './SkyconType';
import ColorableParts from './ColorableParts';

interface Size {
  width: number;
  height: number;
}

export interface Props {
  icon: SkyconType;
  color: ColorableParts | string;
  size: Size;
  animate: boolean;
  resizeClear: boolean;
}

export const ReactSkycon: React.FC<Props> = ({
  icon = SkyconType.CLEAR_DAY,
  color = 'gold',
  size = { width: 128, height: 128 },
  animate = true,
  resizeClear = true,
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
    <canvas ref={skyconCanvas} width={size.width} height={size.height}></canvas>
  );
};
