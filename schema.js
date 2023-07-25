const dynamoose = require('dynamoose');

const personSchema = new dynamoose.Schema({
  id: {
    type: String,
    // hashKey: true, // Partition key
  },
  title: {
    type: String,
    // required: true,
  },
  author: {
    type: String,
    // required: true,
  },
  publicationYear: {
    type: Number,
    // required: true,
  },
}); //غيري البروبيرتي

const personModel = dynamoose.model('Person', personSchema);


module.exports = personModel;
