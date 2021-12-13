export interface Weather {
    weather: WeatherInfo[],
 main: {
 temp: number;
 };
 dt: number |"13/dec/2021";
 sys: {
 country: string;
};
name: string;
}

interface WeatherInfo {
 main: string;
 dt: number;
 icon: string;
} 
