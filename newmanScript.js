const newman = require('newman');
 
newman.run({
    collection: require('./data/JSONPlaceholder With Scripts.postman_collection.json'), // can also provide a URL or path to a local JSON file.
    environment: require('./data/JSONPlaceholder.postman_environment.json'),
    reporters: 'htmlextra',
    reporter: {
        htmlextra: {}
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
