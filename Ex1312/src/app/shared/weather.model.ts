export interface Weather {
    weather: WeatherInfo[],
 main: {
 temp: number;
 };
 dt: string;
 sys: {
 country: string;
};
name: string;
}

interface WeatherInfo {
 main: string;
 dt: string;
 icon: string;
} 
