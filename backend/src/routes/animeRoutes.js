import express from 'express'
import animeController from '../controllers/animeController.js'

const router = express.Router()

router.get('/', animeController.getTopAnimes)

router.get('/search',animeController.getAnimesById)

router.get('/:id', animeController.searchAnimes)

export default router