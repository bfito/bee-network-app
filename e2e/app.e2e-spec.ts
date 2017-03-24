import { BeeNetworkAppPage } from './app.po';

describe('bee-network-app App', () => {
  let page: BeeNetworkAppPage;

  beforeEach(() => {
    page = new BeeNetworkAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
