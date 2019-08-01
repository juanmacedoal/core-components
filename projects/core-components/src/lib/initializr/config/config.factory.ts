import { ConfigService } from './config.service';

export function ConfigFactory(config: ConfigService): () => Promise<any> {
  return (): Promise<any> => {
    return null;
  };
}
