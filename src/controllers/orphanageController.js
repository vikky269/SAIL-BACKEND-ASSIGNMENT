import orphanageModel from "../models/orphanageModel.js";

const orphanage = orphanageModel

//add a new orphanage
export const addOrphanage = async (req , res)=> {
    try {
        let newOrphanage = new orphanage(req.body)
        await newOrphanage.save()
        res.status(201).json(newOrphanage)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// get all orphanages from the database

export const getAllOrphanages = async (req, res)=> {
    try {
         let allOrphanage = await orphanage.find()
          res.status(201).json(allOrphanage)
    } catch (error) {
         res.status(400).json({error:error.message})
    }
}

// get a specific orphanage by id

export const getOrphanage = async (req, res)=> {
    try {
        const singleOrphanage = await orphanage.findById(req.params.id)
        if(!singleOrphanage){
            return res.status(404).json({message: "Orphanage not found!"})
        }
        res.status(201).json(singleOrphanage)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


//get and update a specific orphanage by Id

export const updateOrphanage = async (req, res)=>{ 
    try {
        let updatedOrphanage = await orphanage.findByIdAndUpdate(req.params.id, req.body, {new:true})
        if(!updatedOrphanage){
            return res.status(404).json({message:"Orphanage not found"})
        }
        res.status(201).json({message:"Orphanage Updated successfully", updatedOrphanage})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}