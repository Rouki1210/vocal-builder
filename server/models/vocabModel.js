const mongoose = require('mongoose')

const vocabSchema = new mongoose.Schema(
   {
      english: {
         type: String,
         required: true
      },
      german: {
         type: String,
         required: true
      },
      vietnamese: {
         type: String,
         required: true
      }
   },
   {
      versionKey: false   
   }
)

//declare model
const vocabModel = mongoose.model('vocabs', vocabSchema)

//export model as a module
module.exports = vocabModel
