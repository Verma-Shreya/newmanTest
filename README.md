# Newman Test

Observing how Newman works for Postman.  
Newman is a command-line collection runner for Postman. It allows you to effortlessly run and test a Postman collection directly from the command-line. 

## Setup
1. Clone the Git repository.
2. Run `npm i` in local directory to install dependencies.

## Scripts

### `npm run newman`
Runs newmanScript.js. The script runs the Postman collection in the environment provided and reports on the run through the reporter chosen. 

## Configuring the script
1. Provide the path to the collection and environment in the options.
2. Choose the reporter you want. Currently the reporter is set to htmlextra. It generates a comprehensive html report once run is finished.

## Data
There are 3 files in the data folder:
1. JSONPlaceholder With Scripts.postman_collection.json: JSONPlaceholder collection file with scripts and tests to demonstrate the following:
    - Extracting response values into variables
        - Extract user id for a username ('Antonette')
        - Get all posts for that user id
    - Sending same request multiple times with different variables
        - Get 3 posts by title
        - Update titles
    - Tests
        - Check response of update API
        - Check response of get users by username
        - Use variable 'tests_passing' to check test failure
        - Add test script to collection to stop collection run on non-200 status code or test failure

2. JSONPlaceholder.postman_collection.json: JSONPlaceholder collection file with a not found route to throw 404 on purpose scripts and tests

3. JSONPlaceholder.postman_environment.json: JSONPlaceholder environment file with 'post_title_update_map' variable to map current post titles to new ones.

## References
[Newman documentation](https://github.com/postmanlabs/newman/blob/develop/README.md)  
[newman-reporter-htmlextra](https://www.npmjs.com/package/newman-reporter-htmlextra)  
[Postman documentation](https://learning.postman.com/docs/postman/launching-postman/introduction/)
