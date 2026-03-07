import express from 'express'
import cors from 'cors'
import config from './config/environment'

const app = express()

app.use(express.json())
app.use(cors())
