
    // src/functions/myHttpTrigger.js
    const { app } = require('@azure/functions');

    app.http('terratestTrigger', {
        methods: ['GET', 'POST'],
        authLevel: 'anonymous', // Or 'function', 'admin'
        handler: async (request, context) => {
            context.log(`Http function processed request for url "${request.url}"`);

            const name = request.query.get('name') || (request.body && request.body.name);

            if (name) {
                return { body: `Hello, ${name}!` };
            } else {
                return { body: "Please pass a name on the query string or in the request body." };
            }
        }
    });
