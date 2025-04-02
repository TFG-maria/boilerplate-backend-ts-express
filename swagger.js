const swaggerAutogen = require('swagger-autogen');

const outputFile = process.env['OPENAPI_PATH'];
const host = String(process.env['HOST']);
const port = Number(process.env['PORT']);

const doc = {
    info: {
        title: 'boilerplate-backend-ts-express', // Cambia esto al nombre de tu proyecto
        description: 'Documentación de los endpoints de Tu Proyecto', // Cambia esto a una descripción adecuada
        version: '1.0.0',
    },
    host: `${host}:${port}`,
    serve: [
        {
            url: `${host}:${port}`,
            variables: {
                port: {
                    default: 3000
                }
            }
        }
    ],
    basePath: '/',
    schemes: ['http'],
    tags: [],
    definitions: {
        User: {
            id: 'UUID',
            username: 'string',
            email: 'string',
        }
    }
};

const endpointsFiles = ['src/app.ts'];

swaggerAutogen()(outputFile, endpointsFiles, doc);
