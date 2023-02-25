import React from "react";
// import ReactDOM from "react-dom/client";

import { useEffect, useRef } from "react";

//@ts-ignore
import Skycons from "./skycons-js/skycons";

export type ColorableParts = {
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
};

export type SkyconProps = Omit<
  React.CanvasHTMLAttributes<HTMLCanvasElement>,
  "color"
> & {
  icon:
    | "CLEAR_DAY"
    | "CLEAR_NIGHT"
    | "PARTLY_CLOUDY_DAY"
    | "PARTLY_CLOUDY_NIGHT"
    | "CLOUDY"
    | "RAIN"
    | "SHOWERS_DAY"
    | "SHOWERS_NIGHT"
    | "SLEET"
    | "RAIN_SNOW"
    | "RAIN_SNOW_SHOWERS_DAY"
    | "RAIN_SNOW_SHOWERS_NIGHT"
    | "SNOW"
    | "SNOW_SHOWERS_DAY"
    | "SNOW_SHOWERS_NIGHT"
    | "WIND"
    | "FOG"
    | "THUNDER"
    | "THUNDER_RAIN"
    | "THUNDER_SHOWERS_DAY"
    | "THUNDER_SHOWERS_NIGHT"
    | "HAIL";
  color?: string | ColorableParts;
  size?: number;
  animate?: boolean;
  resizeClear?: boolean;
  style?: React.CSSProperties;
  className?: string;
};

export type RseClearDayProps = Omit<SkyconProps, "icon" | "color"> & {
  color?: {
    sun?: string;
  };
};

export type RseClearNightProps = Omit<SkyconProps, "icon" | "color"> & {
  color?: {
    moon?: string;
  };
};

export type RsePartlyCloudyDayProps = Omit<SkyconProps, "icon" | "color"> & {
  color?: {
    sun?: string;
    light_cloud?: string;
  };
};

export type RsePartlyCloudyNightProps = Omit<SkyconProps, "icon" | "color"> & {
  color?: {
    moon?: string;
    light_cloud?: string;
  };
};

export type RseCloudyProps = Omit<SkyconProps, "icon" | "color"> & {
  color?: {
    light_cloud?: string;
  };
};

export type RseRainProps = Omit<SkyconProps, "icon" | "color"> & {
  color?: {
    cloud?: string;
    rain?: string;
  };
};

export type RseShowersDayProps = Omit<SkyconProps, "icon" | "color"> & {
  color?: {
    sun?: string;
    cloud?: string;
    rain?: string;
  };
};

export type RseShowersNightProps = Omit<SkyconProps, "icon" | "color"> & {
  color?: {
    moon?: string;
    cloud?: string;
    rain?: string;
  };
};

export type RseSleetProps = Omit<SkyconProps, "icon" | "color"> & {
  color?: {
    cloud?: string;
    sleet?: string;
  };
};

export type RseRainSnowProps = Omit<SkyconProps, "icon" | "color"> & {
  color?: {
    cloud?: string;
    rain?: string;
    snow?: string;
  };
};

export type RseRainSnowShowersDayProps = Omit<SkyconProps, "icon" | "color"> & {
  color?: {
    sun?: string;
    cloud?: string;
    rain?: string;
    snow?: string;
  };
};

export type RseRainSnowShowersNightProps = Omit<
  SkyconProps,
  "icon" | "color"
> & {
  color?: {
    moon?: string;
    cloud?: string;
    rain?: string;
    snow?: string;
  };
};

export type RseSnowProps = Omit<SkyconProps, "icon" | "color"> & {
  color?: {
    cloud?: string;
    snow?: string;
  };
};

export type RseSnowShowersDayProps = Omit<SkyconProps, "icon" | "color"> & {
  color?: {
    sun?: string;
    cloud?: string;
    snow?: string;
  };
};

export type RseSnowShowersNightProps = Omit<SkyconProps, "icon" | "color"> & {
  color?: {
    moon?: string;
    cloud?: string;
    snow?: string;
  };
};

export type RseWindProps = Omit<SkyconProps, "icon" | "color"> & {
  color?: {
    leaf?: string;
    wind?: string;
  };
};

export type RseFogProps = Omit<SkyconProps, "icon" | "color"> & {
  color?: {
    light_cloud?: string;
    fog?: string;
  };
};

export type RseThunderProps = Omit<SkyconProps, "icon" | "color"> & {
  color?: {
    dark_cloud?: string;
    thunder?: string;
  };
};

export type RseThunderRainProps = Omit<SkyconProps, "icon" | "color"> & {
  color?: {
    dark_cloud?: string;
    rain?: string;
    thunder?: string;
  };
};

export type RseThunderShowersDayProps = Omit<SkyconProps, "icon" | "color"> & {
  color?: {
    sun?: string;
    dark_cloud?: string;
    rain?: string;
    thunder?: string;
  };
};

export type RseThunderShowersNightProps = Omit<
  SkyconProps,
  "icon" | "color"
> & {
  color?: {
    moon?: string;
    dark_cloud?: string;
    rain?: string;
    thunder?: string;
  };
};

export type RseHailProps = Omit<SkyconProps, "icon" | "color"> & {
  color?: {
    cloud?: string;
    hail?: string;
  };
};

export function ReactSkycon({
  icon,
  color = "black",
  size = 40,
  animate = true,
  resizeClear = true, // it is recommended by skycons authors to make resizeClear always true
  height, // grab height and width here to not override our canvas width and height
  width,
  ...props
}: SkyconProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const skycons = new Skycons({ color, resizeClear });
    skycons.add(canvasRef.current, icon);
    if (animate) {
      skycons.play();
    }

    return () => {
      skycons.pause();
      skycons.remove();
    };
  }, [icon, color, animate, resizeClear]);

  return (
    <canvas ref={canvasRef} height={size} width={size} {...props}></canvas>
  );
}

export function RseClearDay({ ...props }: RseClearDayProps) {
  return <ReactSkycon icon="CLEAR_DAY" {...props} />;
}

export function RseClearNight({ ...props }: RseClearNightProps) {
  return <ReactSkycon icon="CLEAR_NIGHT" {...props} />;
}

export function RsePartlyCloudyDay({ ...props }: RsePartlyCloudyDayProps) {
  return <ReactSkycon icon="PARTLY_CLOUDY_DAY" {...props} />;
}

export function RsePartlyCloudyNight({ ...props }: RsePartlyCloudyNightProps) {
  return <ReactSkycon icon="PARTLY_CLOUDY_NIGHT" {...props} />;
}

export function RseCloudy({ ...props }: RseCloudyProps) {
  return <ReactSkycon icon="CLOUDY" {...props} />;
}

export function RseRain({ ...props }: RseRainProps) {
  return <ReactSkycon icon="RAIN" {...props} />;
}

export function RseShowersDay({ ...props }: RseShowersDayProps) {
  return <ReactSkycon icon="SHOWERS_DAY" {...props} />;
}

export function RseShowersNight({ ...props }: RseShowersNightProps) {
  return <ReactSkycon icon="SHOWERS_NIGHT" {...props} />;
}

export function RseSleet({ ...props }: RseSleetProps) {
  return <ReactSkycon icon="SLEET" {...props} />;
}

export function RseRainSnow({ ...props }: RseRainSnowProps) {
  return <ReactSkycon icon="RAIN_SNOW" {...props} />;
}

export function RseRainSnowShowersDay({
  ...props
}: RseRainSnowShowersDayProps) {
  return <ReactSkycon icon="RAIN_SNOW_SHOWERS_DAY" {...props} />;
}

export function RseRainSnowShowersNight({
  ...props
}: RseRainSnowShowersNightProps) {
  return <ReactSkycon icon="RAIN_SNOW_SHOWERS_NIGHT" {...props} />;
}

export function RseSnow({ ...props }: RseSnowProps) {
  return <ReactSkycon icon="SNOW" {...props} />;
}

export function RseSnowShowersDay({ ...props }: RseSnowShowersDayProps) {
  return <ReactSkycon icon="SNOW_SHOWERS_DAY" {...props} />;
}

export function RseSnowShowersNight({ ...props }: RseSnowShowersNightProps) {
  return <ReactSkycon icon="SNOW_SHOWERS_NIGHT" {...props} />;
}

export function RseWind({ ...props }: RseWindProps) {
  return <ReactSkycon icon="WIND" {...props} />;
}

export function RseFog({ ...props }: RseFogProps) {
  return <ReactSkycon icon="FOG" {...props} />;
}

export function RseThunder({ ...props }: RseThunderProps) {
  return <ReactSkycon icon="THUNDER" {...props} />;
}

export function RseThunderRain({ ...props }: RseThunderRainProps) {
  return <ReactSkycon icon="THUNDER_RAIN" {...props} />;
}

export function RseThunderShowersDay({ ...props }: RseThunderShowersDayProps) {
  return <ReactSkycon icon="THUNDER_SHOWERS_DAY" {...props} />;
}

export function RseThunderShowersNight({
  ...props
}: RseThunderShowersNightProps) {
  return <ReactSkycon icon="THUNDER_SHOWERS_NIGHT" {...props} />;
}

export function RseHail({ ...props }: RseHailProps) {
  return <ReactSkycon icon="HAIL" {...props} />;
}

// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//   <React.StrictMode>
//     <>
//       <ReactSkycon icon="CLEAR_DAY" size={20} color={{ sun: "hotpink" }} />
//       <ReactSkycon icon="PARTLY_CLOUDY_DAY" size={10} color="black" />
//       <ReactSkycon icon="THUNDER_SHOWERS_DAY" size={30} color="blue" />
//       <ReactSkycon icon="RAIN_SNOW_SHOWERS_DAY" size={70} color="red" />
//       <RseClearDay color={{ sun: "red" }} />
//       <RseClearNight color={{ moon: "gold" }} />
//       <RsePartlyCloudyDay color={{ sun: "gold", light_cloud: "red" }} />
//       <RsePartlyCloudyNight color={{ moon: "gold", light_cloud: "pink" }} />
//     </>
//   </React.StrictMode>
// );
