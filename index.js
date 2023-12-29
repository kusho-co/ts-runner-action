const core = require('@actions/core');
const github = require('@actions/github');

try {
  // const testSuites = ["MongoDB Data API - Find Document", "MongoDB Data API - Find Multiple Documents"]
  let testSuites = core.getInput("test-suites")
  testSuites = testSuites.split(",")
  for (ts of testSuites) {
    console.log(`Running test suite ${ts}`);
    core.error(`2 test cases failed in ${ts}. Go to http://localhost:5173/dashboard/test-suite-report/12c743c8-e43b-4d86-a893-3213fdaf4345 for more info.`)
    
    core.startGroup('FAILED -> Test with wrong HTTP method')
    console.log("REASON -> Expected an error response for wrong HTTP method. Got 200 response instead.")
    console.log("RESPONSE ->")
    console.log(JSON.stringify({
      "statusCode": 200,
      "body": {
        "id": 123,
        "name": "John Doe",
        "email": "john.doe@example.com"
      }
    }, null, 4))
    core.endGroup()

    core.startGroup('FAILED -> Test with valid input for dataSource field')
    console.log("REASON -> Expected a 200 success response, got 500 Internal Server Error instead.")
    console.log("RESPONSE ->")
    console.log(JSON.stringify({
      "statusCode": 500,
      "body": {
        "error": "Internal Server Error"
      }
    }, null, 4))
    core.endGroup()
  }
  core.setFailed("Some test suites have failed. Check the logs for more details.")
} catch (error) {
  core.setFailed(error.message);
}
