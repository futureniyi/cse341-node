const swaggerAutogen = require('swagger-autogen')();
const port = process.env.PORT || 3000;
const host = process.env.SWAGGER_HOST || `localhost:${port}`;
const scheme = process.env.SWAGGER_SCHEME || 'http';

const doc = {
  info: { title: 'Contacts API', description: 'API documentation' },
  host,
  schemes: [scheme],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
