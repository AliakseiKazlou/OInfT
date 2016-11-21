import { OInfTPage } from './app.po';

describe('oinf-t App', function() {
  let page: OInfTPage;

  beforeEach(() => {
    page = new OInfTPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
