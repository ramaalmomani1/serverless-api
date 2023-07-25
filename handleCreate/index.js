const personModel = require('../schema');

exports.handler = async (event) => {
  const { name, age } = JSON.parse(event.body);

  try {
    const person = new personModel({ name, age }); //غيريهم
    await person.save();
    return {
      statusCode: 200,
      body: JSON.stringify(person),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to create the person.' }),
    };
  }
};