# Portfolio Website Backend

This is the backend for the Portfolio Website project. It is built using Node.js and Express, and it connects to a MongoDB database to manage portfolio items.

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Running the Application](#running-the-application)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/portfolio-website.git
   ```

2. Navigate to the backend directory:
   ```
   cd portfolio-website/backend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Environment Variables

Create a `.env` file in the backend directory and add the following variables:

```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

Replace `your_mongodb_connection_string` with your actual MongoDB connection string.

## API Endpoints

- `GET /api/portfolio` - Retrieve all portfolio items
- `POST /api/portfolio` - Create a new portfolio item
- `PUT /api/portfolio/:id` - Update a portfolio item by ID
- `DELETE /api/portfolio/:id` - Delete a portfolio item by ID

## Running the Application

To start the backend server, run the following command:

```
npm start
```

The server will run on `http://localhost:5000`. Make sure to have your MongoDB database running and accessible.

## License

This project is licensed under the MIT License.