/**
 * Create and export config variables
*/

// container for all environments
const environments = {}

// staging environment (default)
environments.staging = {
  'port': 3000,
  'envName': 'staging',
}

// production environment
environments.production = {
  'port': 5000,
  'envName': 'production',
}

// determine which environment was passed as a command line argument
const currentEnvironment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : ''

// check that current environment is one of the above, if not, default to staging
const environmentToExport = typeof(environments[currentEnvironment]) == 'object' ? environments[currentEnvironment] : environments.staging

// export module
module.exports = environmentToExport
