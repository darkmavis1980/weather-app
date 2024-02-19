// import Snow from '../svg/snowy-1.svg';
// import Rain from '../svg/rainy-1.svg';
// import Cloud from '../svg/cloudy.svg';
// import Sun from '../svg/day.svg';
// import Storm from '../svg/thunder.svg';

import Sunny from '../svg/weather-icons/wi-day-sunny.svg';
import MostlyClear from '../svg/weather-icons/wi-day-cloudy-high.svg';
import PartlyCloudy from '../svg/weather-icons/wi-day-cloudy.svg';
import Overcast from '../svg/weather-icons/wi-cloudy.svg';
import Fog from '../svg/weather-icons/wi-fog.svg';
import Drizzle from '../svg/weather-icons/wi-day-showers.svg';
import Rain from '../svg/weather-icons/wi-day-rain.svg';
import Snow from '../svg/weather-icons/wi-day-snow.svg';
import Hail from '../svg/weather-icons/wi-day-hail.svg';
import Thunderstorm from '../svg/weather-icons/wi-day-thunderstorm.svg';
import ThunderstormSnow from '../svg/weather-icons/wi-day-snow-thunderstorm.svg';

// export const ICON_MAP: Record<string, string> = {
//   "snow": Snow,
//   "rain": Rain,
//   "cloud": Cloud,
//   "sun": Sun,
//   "storm": Storm,
//   "wind": Sun,
// }

export const ICON_MAP: Record<string, string> = {
  "clear": Sunny,
  "mostly_clear": MostlyClear,
  "partly_cloudy": PartlyCloudy,
  "overcast": Overcast,
  "fog": Fog,
  "drizzle": Drizzle,
  "rain_light": Rain,
  "rain": Rain,
  "rain_heavy": Rain,
  "snow_light": Snow,
  "snow": Snow,
  "snow_heavy": Snow,
  "hail": Hail,
  "rain_shower_light": Rain,
  "rain_shower": Rain,
  "rain_shower_heavy": Rain,
  "thunderstorm": Thunderstorm,
  "thunderstorm_hail": ThunderstormSnow,
  "thunderstorm_hail_heavy": ThunderstormSnow,
}
