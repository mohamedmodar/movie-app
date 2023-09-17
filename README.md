# Movie App

The Movie App is a web application built with Node.js, Express.js, EJS, and MongoDB. It allows users to list movies, add new movies, edit existing movies, delete movies, and log every request to a log file using middleware.

## Table of Contents

    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Project Structure](#project-structure)
- [Routes](#routes)
- [Middleware](#middleware)
- [Database](#database)

### Prerequisites

Before you can run the Movie App, make sure you have the following prerequisites installed on your system:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mohamedmodar/movie-app
   ```
2. Create a `.env` file in the project root and set the following environment variables:

   ```
   PORT=3000
   CONNECTION_STRING = "your-mongodb-url"
   ```
   Replace `your-mongodb-uri` with your MongoDB connection URI.

3. Start the application:

   ```bash
   npm start
   ```

   The Movie App will be accessible at `http://localhost:3000` by default.
## Project Structure

The Movie App project structure is organized as follows:

- `routes/` - Defines the application's routes and controllers.
- `shchemas/` - contains files that define the structure and behavior of data models used to interact with a database.
- `package.json` - Defines project dependencies and scripts.
- `app.js` - The main entry point of the application.

## Routes

1. **List All Movies**
    - **URL:** `/`
    - **HTTP Method:** GET
    - **Description:** Displays a list of all movies.

2. **Add New Movie Form**
    - **URL:** `/`
    - **HTTP Method:** POST
    - **Description:** adding a new movie with title, genre, year, and rating.

3. **Update Movie**
    - **URL:** `/:id`
    - **HTTP Method:** PUT
    - **Description:** updates the movie's data.

4. **Delete Movie**
    - **URL:** `/:id`
    - **HTTP Method:** DELETE
    - **Description:** Allows users to delete a specific movie from the database.

## Middleware

Middleware is used for logging requests to a log file and write the route, the method and the date of request

## Database

The Movie App uses MongoDB for database storage. Mongoose is used as the ODM (Object-Document Mapping) library to interact with MongoDB. The database schema for movies is defined in `shcemas/movie.js`.


