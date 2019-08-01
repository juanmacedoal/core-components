import { LangModule } from './lang.module';

describe('LangModule', () => {
  let langModule: LangModule;

  beforeEach(() => {
    langModule = new LangModule();
  });

  it('should create an instance', () => {
    expect(langModule).toBeTruthy();
  });
});
