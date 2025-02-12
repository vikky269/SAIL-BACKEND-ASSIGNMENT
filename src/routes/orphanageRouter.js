import express from 'express'
import { addOrphanage, getAllOrphanages, getOrphanage, updateOrphanage } from '../controllers/orphanageController.js'

const orphanageRouter = express.Router()

orphanageRouter.post("/create", addOrphanage) //create a new orphanage in the database
orphanageRouter.get("/", getAllOrphanages) //get all orphanages from the database
orphanageRouter.get("/:id", getOrphanage) //get a specific orphanage by id
orphanageRouter.patch("/update/:id", updateOrphanage) //update an orphanage by id




export default orphanageRouter