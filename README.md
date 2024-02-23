# Event Wishes _ BACK

This Express server is built with TypeScript and designed to manage a list of prestataires. It provides API endpoints to retrieve prestataires and add new ones.

## Prerequisites

Before running this project, ensure you have the following installed:

- Node.js
- npm (Node.js package manager)
- Docker (optional, for containerization)

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run the following command to install dependencies:

   ```bash
   npm install
   ```

## Usage

### Running Locally

To run the server locally, execute the following command:

```bash
npm start
```

The server will start running at [http://localhost:3000](http://localhost:3000).

### API Endpoints

- `GET /`: Returns a welcome message indicating that the Express server is running.
- `GET /prestataires`: Returns the list of prestataires.
- `POST /prestataires`: Adds a new prestataire to the list.

### Sample Prestataire Object

A prestataire object has the following structure:

```json
{
  "name": "string",
  "url": "string",
  "nbLike": "number"
}
```

### Running with Docker

If you prefer to run the server using Docker, you can use the provided Dockerfile. Here's the Dockerfile content:

```Dockerfile
FROM node:20.11.0-alpine

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

CMD ["npm", "start"]
```

To build and run the Docker container, use the following commands:

```bash
docker build -t my-express-server .
docker run -p 3000:3000 my-express-server
```

Replace `my-express-server` with your desired image name.

## Features

- Provides API endpoints to manage prestataires.
- Supports adding new prestataires via POST request.
- Written in TypeScript for type safety and maintainability.