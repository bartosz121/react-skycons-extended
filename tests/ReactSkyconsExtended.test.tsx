import React from "react";
import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import {
  ReactSkycon,
  RseClearDay,
  RseClearNight,
  RsePartlyCloudyDay,
  RsePartlyCloudyNight,
  RseCloudy,
  RseRain,
  RseShowersDay,
  RseShowersNight,
  RseSleet,
  RseRainSnow,
  RseRainSnowShowersDay,
  RseRainSnowShowersNight,
  RseSnow,
  RseSnowShowersDay,
  RseSnowShowersNight,
  RseWind,
  RseFog,
  RseThunder,
  RseThunderRain,
  RseThunderShowersDay,
  RseThunderShowersNight,
  RseHail,
} from "../lib/main";

describe("ReactSkycon", () => {
  it("should render", () => {
    render(<ReactSkycon icon="CLEAR_DAY" />);
    render(<ReactSkycon icon="CLEAR_NIGHT" />);
    render(<ReactSkycon icon="PARTLY_CLOUDY_DAY" />);
    render(<ReactSkycon icon="PARTLY_CLOUDY_NIGHT" />);
    render(<ReactSkycon icon="CLOUDY" />);
    render(<ReactSkycon icon="RAIN" />);
    render(<ReactSkycon icon="SHOWERS_DAY" />);
    render(<ReactSkycon icon="SHOWERS_NIGHT" />);
    render(<ReactSkycon icon="SLEET" />);
    render(<ReactSkycon icon="RAIN_SNOW" />);
    render(<ReactSkycon icon="RAIN_SNOW_SHOWERS_DAY" />);
    render(<ReactSkycon icon="RAIN_SNOW_SHOWERS_NIGHT" />);
    render(<ReactSkycon icon="SNOW" />);
    render(<ReactSkycon icon="SNOW_SHOWERS_DAY" />);
    render(<ReactSkycon icon="SNOW_SHOWERS_NIGHT" />);
    render(<ReactSkycon icon="WIND" />);
    render(<ReactSkycon icon="FOG" />);
    render(<ReactSkycon icon="THUNDER" />);
    render(<ReactSkycon icon="THUNDER_RAIN" />);
    render(<ReactSkycon icon="THUNDER_SHOWERS_DAY" />);
    render(<ReactSkycon icon="THUNDER_SHOWERS_NIGHT" />);
    render(<ReactSkycon icon="HAIL" />);
  });
});

describe("Rse icons", () => {
  it("should render", () => {
    render(<RseClearDay />);
    render(<RseClearNight color={{ moon: "red" }} />);
    render(<RsePartlyCloudyDay />);
    render(<RsePartlyCloudyNight />);
    render(<RseCloudy />);
    render(<RseRain />);
    render(<RseShowersDay />);
    render(<RseShowersNight />);
    render(<RseSleet />);
    render(<RseRainSnow />);
    render(<RseRainSnowShowersDay />);
    render(<RseRainSnowShowersNight />);
    render(<RseSnow />);
    render(<RseSnowShowersDay />);
    render(<RseSnowShowersNight />);
    render(<RseWind color={{ leaf: "hotpink", wind: "#ff00ff" }} />);
    render(<RseFog />);
    render(<RseThunder />);
    render(<RseThunderRain />);
    render(<RseThunderShowersDay />);
    render(<RseThunderShowersNight />);
    render(<RseHail />);
  });
});
