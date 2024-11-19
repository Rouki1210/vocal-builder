//declare model
const vocabModel = require('../models/vocabModel')

//declare functions
//Note 1: use "async ... await" technique
//Note 2: use "try ... catch" to handle error (if have)
const viewAllVocabs = async (req, res) => {
   try {
      //retrieve data from DB
      //sort by "_id" descending : new data on the top
      let vocabs = await vocabModel.find({}).sort({ _id: - 1 })
      //return data as API (JSON format)
      res.json(vocabs)
   } catch (err) {
      res.send(err)
   }
}

const addVocab = async (req, res) => {
   try {
      //get input data
      let vocab = req.body
      //save data to DB
      await vocabModel.create(vocab)
      //return success message
      res.json({ "message": "Add vocab succeed !" })
   } catch (err) {
      res.send(err)
   }
}

const deleteAllVocabs = async (req, res) => {
   try {
      await vocabModel.deleteMany()
      res.json({ "message": "Delete all vocabs succeed !" })
   } catch (err) {
      res.send(err)
   }
}

const viewVocab = async (req, res) => {
   try {
      let id = req.params.id
      let vocab = await vocabModel.findById(id)
      res.json(vocab)
   } catch (err) {
      res.send(err)
   }
}

const editVocab = async (req, res) => {
   try {
      let id = req.params.id
      let data = req.body
      await vocabModel.findByIdAndUpdate(id, data)
      res.json({ "message": "Edit vocab succeed !" })
   } catch (err) {
      res.send(err)
   }
}

const deleteVocab = async (req, res) => {
   try {
      let id = req.params.id
      await vocabModel.findByIdAndDelete(id)
      res.json({ "message": "Delete vocab succeed !" })
   } catch (err) {
      res.send(err)
   }
}

//export functions
module.exports = {
   viewAllVocabs,
   addVocab,
   deleteAllVocabs,
   viewVocab,
   editVocab,
   deleteVocab
}
