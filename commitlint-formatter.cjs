module.exports = function formatter(report) {
  const errors = report?.errors ?? [];

  if (errors.length > 0) {
    return `
❌ Invalid commit message

Please use:

  <type>: <description>

Examples:

  feat: add authentication
  fix: resolve login issue
  docs: update readme

Allowed types:

  feat      New feature
  fix       Bug fix
  docs      Documentation
  refactor  Code changes
  chore     Maintenance
`;
  }

  return "";
};
