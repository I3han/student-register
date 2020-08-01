const mongoose = require('mongoose');

const gradeSchema = mongoose.Schema({
  studentName: { type:String, required: true},
  mathsMark: { type:Number, required: true},
  engMark: { type:Number, required: true},
  sciMark: { type:Number, required: true},
  totMark: { type:Number, required: true},
});

module.exports = mongoose.model('Grade', gradeSchema);
