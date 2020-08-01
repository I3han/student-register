const ResponseService = require('../shared/ResponseService'); // Response service
const Grade = require('../models/grade'); // grade model
const app = require('express');
const router = app.Router();

router.post('/', (req, res)  => {
  const grade = new Grade(req.body);
  grade.save((err, doc) => {
    ResponseService.generalPayloadResponse(err, doc, res);
    });
  });

router.get('/',  (req, res) => {
  Grade.find((err, doc) => {
    ResponseService.generalPayloadResponse(err, doc, res);
});
  });


router.get('/max', (req, res) =>{

  Grade.find( { totMark: { $gte: 250 } }, (err, doc) => {
      ResponseService.generalPayloadResponse(err, doc, res);
  })
});

module.exports = router;
