import express from 'express'
import { songRouter } from "./api/resources/song/index";

export const restRoute = express.Router()
restRoute.use('/songs',songRouter)