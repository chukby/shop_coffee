import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPages();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getPageTitle()).toContain('Tab One');
  });
});
