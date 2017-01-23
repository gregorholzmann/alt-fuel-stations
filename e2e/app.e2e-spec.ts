import { AltFuelStationsPage } from './app.po';

describe('alt-fuel-stations App', function() {
  let page: AltFuelStationsPage;

  beforeEach(() => {
    page = new AltFuelStationsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
