const express = require('express')

const movies = require('./movies.json')

const app = express()

const PORT = process.env.PORT ?? 3000

app.disable('x-powered-by') // Desabilita el header X-Powered-By: Express

app.get('/', (req, res) => {
	res.json({ message: 'Hello World!' })
})

app.get('/movies', (req, res) => {
	res.json(movies)
})

app.get('/movies/:id', (req, res) => {
	const { id } = req.params
	const movie = movies.find((movie) => movie.id === id)
	movie
		? res.json(movie)
		: res.status(404).json({ message: 'Movie not Found' })
})

app.listen(PORT, () => {
	console.log(`Server listening on port http://localhost:${PORT}`)
})
