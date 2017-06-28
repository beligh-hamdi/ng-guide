import { NgGuidePage } from './app.po';

describe('ng-guide App', () => {
  let page: NgGuidePage;

  beforeEach(() => {
    page = new NgGuidePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
