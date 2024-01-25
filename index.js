// Imports Dependencies
const express = require('express')
const morgan = require('morgan')
const z = require('zod')

// Imports Core Modules
const crypto = require('crypto')

// Imports Project Modules
const movies = require('./movies.json')
const { validateMovie } = require('./schemas/movies')

const app = express()

const PORT = process.env.PORT ?? 3000

app.disable('x-powered-by') // Desabilita el header X-Powered-By: Express

app.use(morgan('tiny'))
app.use(express.json())

app.get('/', (req, res) => {
	res.json({ message: 'Hello World!' })
})

// GET Movies Routes
app.get('/movies', (req, res) => {
	const { genre } = req.query
	if (genre) {
		const filteredMovies = movies.filter((movie) =>
			movie.genre.some((g) => g.toLowerCase() === genre.toLowerCase())
		)
		return filteredMovies
			? res.json(filteredMovies)
			: res.json({ message: 'No movies of this genre were found' })
	} else {
		return res.json({ message: 'Genre vas not indicated', movies })
	}
	res.json(movies)
})

app.get('/movies/:id', (req, res) => {
	const { id } = req.params
	const movie = movies.find((movie) => movie.id === id)
	movie
		? res.json(movie)
		: res.status(404).json({ message: 'Movie not Found' })
})

// POST Movies Routes
app.post('/movies', (req, res) => {
	const result = validateMovie(req.body)

	if (result.error)
		return res.status(400).json({ error: JSON.parse(result.error.message) })

	const newMovie = {
		id: crypto.randomUUID(), // Generate a random UUID v4
		...result.data
	}

	// No es REST porque se rompe el principio de Stateless
	movies.push(newMovie)

	res.status(201).json(movies)
})

// PATCH Movies Routes
// PUT Movies Routes
// DELETE Movies Routes

app.listen(PORT, () => {
	console.log(`Server listening on port http://localhost:${PORT}`)
})
