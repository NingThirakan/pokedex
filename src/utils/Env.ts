/* eslint-disable @typescript-eslint/consistent-type-assertions */
var envSource = process.env;

if ((<any>window)._env != null) {
  // window.env is set only from env-override.js which is generated inside docker startup.
  // local run won't have this property initialized.

  envSource = (<any>window)._env;
}
/* Get constants from environment variables.
 * Values are configured in .env (for development) and .env.production (for staging and production)
 */
const { NODE_ENV, REACT_APP_ENV, REACT_APP_POKEMON_API } = envSource;

export default {
  NODE_ENV,
  REACT_APP_ENV,
  POKEMON_API: REACT_APP_POKEMON_API ?? "",
};
