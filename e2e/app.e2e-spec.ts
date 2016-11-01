import { MyMapTest1Page } from './app.po';

describe('my-map-test1 App', function() {
  let page: MyMapTest1Page;

  beforeEach(() => {
    page = new MyMapTest1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
