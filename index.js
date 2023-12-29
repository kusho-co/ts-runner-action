const core = require('@actions/core');
const github = require('@actions/github');

try {
  // const testSuites = ["MongoDB Data API - Find Document", "MongoDB Data API - Find Multiple Documents"]
  let testSuites = core.getInput("test-suites")
  testSuites = testSuites.split(",")
  for (ts of testSuites) {
    console.log(`Running test suite ${ts}`);
    core.error(`2 test cases failed in ${ts}`)
    core.startGroup('More details')
    console.log("TEST CASE -> Test with wrong HTTP method")
    console.log("STATUS -> Failed")
    console.log("DETAILS -> Expected an error response for wrong HTTP method. Got 200 response instead.")
    console.log("")
    core.endGroup()
  }
  core.setFailed("Some test suites have failed. Check the logs for more details.")
} catch (error) {
  core.setFailed(error.message);
}
