import { MagicSocialShareModule } from './magic-social-share.module';

describe('MagicSocialShareModule', () => {
  let magicSocialShareModule: MagicSocialShareModule;

  beforeEach(() => {
    magicSocialShareModule = new MagicSocialShareModule();
  });

  it('should create an instance', () => {
    expect(magicSocialShareModule).toBeTruthy();
  });
});
