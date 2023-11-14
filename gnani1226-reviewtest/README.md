### Problem Statement : Real-time Currency Exchange Rates

Problem Description:  Build a Godspeed API that fetches real-time currency exchange rates from a popular financial API like Fixer.io or ExchangeRatesAPI. Apply meaningful business logic, such as currency conversion or historical data analysis, and return a customised response. Implement JWT authentication, handle errors gracefully, and provide clear error messages. Utilise Kafka for message streaming and implement a cron job to update exchange rates at regular intervals.

Specifications:
- Create an endpoint to fetch real-time currency exchange rates for specific currency pairs.
- Store that data in MongoDB.
- Implement logic for currency conversion based on the latest exchange rates.
- Provide historical data analysis and trends in the API response.
- Integrate JWT authentication for secure access to currency exchange rate data.
- Implement error handling for API failures, invalid requests, and external API errors.
- Use Kafka for asynchronous message processing and enhance scalability.
- Set up a cron job to update currency exchange rates periodically.
