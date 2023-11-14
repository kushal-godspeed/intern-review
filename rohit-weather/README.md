### Problem Statement : Real-time Weather Data

Problem Description: Create a Godspeed API that fetches real-time weather data from a popular weather API like OpenWeatherMap. Integrate meaningful business logic to process the data (such as temperature conversion or weather trend analysis) and return a customised response. Implement authentication using JWT, handle errors gracefully, and ensure proper error messages. Utilise Kafka for message streaming and implement a cron job to update weather data at regular intervals.

Specifications:
- Create an endpoint to fetch real-time weather data for a specific location.
- Store that data in MongoDB.
- Implement temperature conversion logic (e.g., Celsius to Fahrenheit).
- Analyze weather trends and provide relevant insights in the API response.
- Integrate JWT authentication for secure access to the weather data.
- Implement error handling for API failures, invalid requests, and external API errors.
- Use Kafka for asynchronous message processing.
- Set up a cron job to update weather data periodically.

