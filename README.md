# Innoscripta - A News Web Application

## Overview

Innoscripta is a modern news web application built with Vite, React, and TypeScript. It fetches news from multiple sources, including The Guardian, The New York Times, and Open News, providing users with a seamless and customizable news-reading experience. Users can select their preferred news sources, authors, and categories, as well as search and filter results based on date, source, and category. All search, filtering, and preference functionalities are handled on the client side.

## Features

- **Multi-Source News Aggregation**: Fetches news from The Guardian, NY Times, and Open News.
- **User Preferences**: Users can select their preferred news sources, authors, and categories.
- **Search & Filtering**: Users can search for news articles and filter results by date, source, and category.
- **Fast & Responsive UI**: Built with modern frontend technologies to ensure a smooth experience.
- **Containerized with Docker**: The application is fully containerized for easy deployment.

## Tech Stack

- **Frontend**: Vite, React, TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Redux
- **Routing**: React Router DOM
- **API Requests**: Axios
- **Animations**: Framer Motion
- **Containerization**: Docker

## Project Structure

```
src/
|-- assets/         # Images and icons
|-- components/     # Reusable components
|-- constants/      # Reusable data constants
|-- helpers/        # Utility functions
|-- hooks/          # Custom hooks for API requests and promises
|-- page/          # Page components
|-- store/          # Redux store and slices
|-- type/          # Type definitions
```

## Installation

### Prerequisites

- Node.js (v20+)
- Docker (optional for containerized deployment)

### Steps

1. Clone the repository:
   ```sh
   git clone https://github.com/Wills-dev/innoscripta.git
   cd innoscripta
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add your API keys for The Guardian, NY Times, and Open News.
   ```sh
   VITE_APP_GUARDIAN_KEY=your_guardian_api_key
   VITE_APP_NY_TIMES_KEY=your_nytimes_api_key
   VITE_APP_OPEN_NEWS_KEY=your_opennews_api_key
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## Running with Docker

To run the application using Docker:

Create a Docker file the root folder and enter the below commands

### Dockerfile

```
FROM node:20-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
```

Also create a .dockerignore file

### .dockerignore file

Add node_modules

```
node_modules
```

1. Build the Docker image:
   ```sh
   docker build -t innoscripta .
   ```
2. Run the container:
   ```sh
   docker run -p 5173:5173 innoscripta
   ```

## Usage

- Navigate to `http://localhost:5173/`
- Select your preferred news source, authors, or categories.
- Use the search bar to find specific news articles.
- Filter search results by date, source, or category.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries or feedback, please reach out to Chidiebere Victor at [ejioguvictor@gmail.com].
