export const info = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'E-commerce',
            version: '1.0.0',
            description: 'Entrega del proyecto final de CoderHouse'
        },
        servers: [
            {
                url: 'http://localhost:8080/api'
            },
            // {
            //     url: 'https://railway.app/myapp'
            // }
        ]
    },
    apis: ['./src/docs/*.yml']
}