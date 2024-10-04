const axios = require('axios');

exports.getWeather = async (req, res) => {
    const { latitude, longitude } = req.query;

    if (!latitude || !longitude) {
        return res.status(400).json({ error: 'latitude and longitude parameters are required' });
    }

    try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast`, {
            params: {
                latitude,
                longitude, 
                current_weather: true
            }
        });

        const temperature = response.data.current_weather.temperature;
        res.json({ temperature });
    } catch (error) {
        res.status(500).json({ error: 'error when querying the API' });
    }
};
