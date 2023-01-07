export const getWeatherData = async (city) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=331f22694d43a5661bba622242428668&lang=ru&units=metric`);
        return await response.json();
    } catch (error) {
        console.error(error);
    }
};