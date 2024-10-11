# { YELLOW } Backend

## Project Description
This backend manages the storage and retrieval of unsent "letters" for the { YELLOW } project. This system allows users to write and search for letters addressed to their first loves. The backend connects to a MongoDB Atlas database to securely and anonymously store these messages.

## Features

### Get All Letters
- **Endpoint**: `GET /letters`
- **Function**: Returns all the letters stored in the database.
- **Response**: Array of letter objects.

### Search Letters by Addressee
- **Endpoint**: `GET /letters/search?addressee=[name]`
- **Function**: Searches for letters containing the provided string in the addressee.
- **Parameters**:
  - `addressee`: String required to perform the search.
- **Response**: Array of letters that match the search or an error message if no results are found.

### Post a New Letter
- **Endpoint**: `POST /letters`
- **Function**: Allows users to send a new letter.
- **Request Body**:
  - `addressee`: The name of the letter's recipient.
  - `letter`: The content of the letter.
- **Response**: Returns the saved letter or an error message in case of failure.

## Technologies Used
This backend is developed with Node.js and the following libraries and technologies:

- **Express.js** (`express`): Server framework for creating routes and managing HTTP requests.
- **Mongoose** (`mongoose`): Library for modeling and handling interactions with the MongoDB database.
- **CORS** (`cors`): Middleware to enable CORS policies and allow API access from different origins.
- **dotenv** (`dotenv`): Used to manage environment variables.

## Dependency Structure
The project's dependencies are managed with `npm` and defined in `package.json`. This includes both libraries necessary for server execution and those for development (`nodemon` for automatically restarting the server during development).

## Installation and Execution

### Clone the Repository
To start working with this backend locally, clone this repository using:

```bash
git clone URL_OF_THE_REPOSITORY
cd server
