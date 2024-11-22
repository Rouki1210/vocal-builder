//declare controller
//Note : .. (2 dots symbol) => go up (outside)
const vocabController = require('../controllers/vocabController')

//declare router
const vocabRouter = (app) => {
   //group links (urls) together
   //group 1: no need to include "id"
   app.route('/vocabs')
      .get(vocabController.viewAllVocabs)
      .post(vocabController.addVocab)
      .delete(vocabController.deleteAllVocabs)
      

   //group 2: need to include "id"
   app.route('/vocabs/:id')
      .get(vocabController.viewVocab)
      .put(vocabController.editVocab)
      .delete(vocabController.deleteVocab)

   app.route('/vocab/search/')
      .post(vocabController.searchVocab)
   

}

//export router
module.exports = vocabRouter