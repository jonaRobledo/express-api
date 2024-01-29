# REST API whit Node.js and Express

## Simple Movie API

This is a simple example of an API applying the REST Architecture that uses HTTP Methods on the "/movies" resource.

## Installation

Clone the repository:

    ~ git clone git@github.com:jonaRobledo/express-api.git

Install Dependecies:

    ~ npm install

Start the application Server:

    ~ npm run dev

## Instrutions for use

-   Endpoint URL: http://localhost:3000/movies
-   HTTP Methods: GET, POST, DELETE, PATCH
-   Review CORS implementation

## Examples of Requests

Use `REST Client` to test HTTP Methods.

#### Get all Movies

    GET http://localhost:3000/movies

#### Get a Movie by ID

    GET http://localhost:3000/movies/dcdd0fad-a94c-4810-8acc-5f108d3b18c3

#### Get all Movies of a Genre

    GET http://localhost:3000/movies?genre=action

#### Create a new Movie

    POST http://localhost:3000/movies
    Content-Type: application/json

    {
        "title": "The Godfather",
        "year": 1975,
        "director": "Francis Ford Coppola",
        "duration": 175,
        "posters": "https://img.fruugo.com/product/4/49/14441494_max.jpg",
        "genre": [
            "Crime",
            "Drama"
        ]
    }

#### Delete a Movie by ID

    DELETE http://localhost:3000/movies/dcdd0fad-a94c-4810-8acc-5f108d3b18c3

#### Update a Movie data by ID

    PATCH http://localhost:3000/movies/dcdd0fad-a94c-4810-8acc-5f108d3b18c3
    Content-Type: application/json

    {
        "year": 1994
    }
