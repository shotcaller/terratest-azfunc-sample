const { app } = require('@azure/functions');

app.http('myHttpTrigger', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query.get('name') || (request.body && request.body.name);

        if (name) {
            return { body: `Hello, ${name}!` };
        } else {
            return { status: 400, body: 'Please pass a name on the query string or in the request body' };
        }
    }
});
