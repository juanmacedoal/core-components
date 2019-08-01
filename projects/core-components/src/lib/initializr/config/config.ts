export class Environment {
  private _config: Config;

  set config(config: Config) {
    this._config = config;
  }

  get config(): Config {
    return this._config;
  }
}

export class Config {
  api: string;
  restApis: string[];
}

export const AppEnv = new Environment();
