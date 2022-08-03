import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome messages', () => {
    page.navigateTo();
    expect(page.getPageTitle()).toContain('Tab One');
  });
});
