const core = require('@actions/core');
const github = require('@actions/github');

try {
  // const testSuites = ["MongoDB Data API - Find Document", "MongoDB Data API - Find Multiple Documents"]
  let testSuites = core.getInput("test-suites")
  testSuites = testSuites.split(",")
  for (ts of testSuites) {
    console.log(`Running test suite ${ts}`);
    core.setFailed(`2 test cases failed in ${ts}`)
  }
} catch (error) {
  core.setFailed(error.message);
}
