# Boilerplate Backend (TypeScript, Node.js, Express)

## Description
This project is a boilerplate template for building backend applications using TypeScript, Node.js, and Express. It is designed to provide a solid foundation for creating scalable and maintainable RESTful APIs. The template includes a well-structured folder architecture and pre-configured tools to streamline development.

## Folder Structure
```
project-name
├── src
│   ├── controllers         # Contains controllers for handling requests
│   ├── models              # Contains use cases for business logic
│   ├── routes              # Contains route definitions
│   ├── entities            # Contains entity definitions
│   ├── dtos                # Contains data transfer objects
│   ├── app.ts              # Main application file
│   └── index.ts            # Entry point for the application
└── README.md               # Project documentation
```

## Architecture Overview
The architecture follows a modular and layered approach to ensure separation of concerns and maintainability:

- **Controllers**: Handle incoming HTTP requests and delegate the processing to the appropriate services or business logic.
- **Models**: Represent the core business logic and use cases of the application.
- **Routes**: Define the API endpoints and map them to the corresponding controllers.
- **Entities**: Define the data structures and domain models used throughout the application.
- **DTOs (Data Transfer Objects)**: Facilitate data validation and transformation between layers.

This structure promotes clean code practices and makes it easier to extend or modify the application as needed.

## Prerequisites
- Node.js (v14.x or higher)
- npm (v6.x or higher) or yarn (v1.x or higher)
- TypeScript (v4.x or higher)

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/TFG-maria/boilerplate-backend-ts-express.git
    ```
2. Navigate to the project directory:
    ```sh
    cd boilerplate-backend-ts-express
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
## Usage
1. Evirontment variables
   ```
   DB_HOST = your-db-host
   DB_NAME = your-db-name
   DB_PASSWORD = your-db-pswd
   DB_PORT = your-db-port
   DB_USERNAME = your-db-username
   HOST = localhost
   OPENAPI_PATH = ./docs/swagger_output.json
   PORT=3000
   ```
3. Start the development server:
    ```sh
    npm run dev
    ```
4. Access the application at
   ```
   http://localhost:3000.
   ```

## Note on Deployment
This repository is intended as a starting point for backend projects. Detailed deployment instructions will be provided in the project's wiki, covering various environments and best practices.
