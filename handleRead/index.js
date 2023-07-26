
const personModel = require('./schema');



exports.handler = async (event) => {
  const { id } = event.pathParameters;

  try {
    const person = await personModel.get(id);
    return {
      statusCode: 200,
      body: JSON.stringify(person),
    };
  } catch (error) {
    return {
      statusCode: 404,
      body: JSON.stringify({ error: 'person not found.' }),
    };
  }
};