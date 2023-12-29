const core = require('@actions/core');
const github = require('@actions/github');

try {
  // const testSuites = ["MongoDB Data API - Find Document", "MongoDB Data API - Find Multiple Documents"]
  let testSuites = core.getInput("test-suites")
  testSuites = testSuites.split(",")
  for (ts of testSuites) {
    core.setCommandEcho(`Running test suite ${ts}`);
    core.error(`2 test cases failed in ${ts}`)
    core.startGroup('More details')
    core.setCommandEcho("TEST CASE -> Test with wrong HTTP method")
    core.setCommandEcho("STATUS -> Failed")
    core.setCommandEcho("DETAILS -> Expected an error response for wrong HTTP method. Got 200 response instead.")
    core.endGroup()
  }
  core.setFailed("Some test suites have failed. Check the logs for more details.")
} catch (error) {
  core.setFailed(error.message);
}
