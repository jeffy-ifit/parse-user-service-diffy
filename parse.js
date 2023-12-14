const { writeFileSync } = require("fs");

const json = {};

const MATCH_PATTERN = /GET:v1-users-([0-9a-fA-F]{24})-cousers/; // example /GET:v1-users-([0-9a-fA-F]{24})-cousers/;
const allRequests = {};
const requestsWithDiffs = {};
let totalMatches = 0;
let totalDiffs = 0;

Object.keys(json).forEach(key => {
  if (key.match(MATCH_PATTERN)) {
    allRequests[key] = json[key];
    if (json[key].differences === 0) totalMatches += json[key].total;
    if (json[key].differences > 0) {
      requestsWithDiffs[key] = json[key];
      totalMatches += json[key].total - json[key].differences;
      totalDiffs += json[key].differences;
    }
  }
});

writeFileSync(
  "parsed.txt",
  `Match Pattern: ${MATCH_PATTERN}\n\nTotal Matches: ${totalMatches}\nTotal Diffs: ${totalDiffs}\n\nFound Requests:\n${JSON.stringify(allRequests, null, 2)}\n\nRequests with Diffs:\n${JSON.stringify(requestsWithDiffs, null, 2)}`
);
