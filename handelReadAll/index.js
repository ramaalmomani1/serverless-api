const personModel = require('./schema');

exports.handler = async () => {
  try {
    const allPeople = await personModel.scan().exec();
    return {
      statusCode: 200,
      body: JSON.stringify(allPeople),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch all people.' }),
    };
  }
};