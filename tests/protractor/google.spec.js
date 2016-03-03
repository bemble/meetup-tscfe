describe('google', () => {
  beforeAll(() => {
    // protractor a été créé pour fonctionner avec angular, on coupe ce couplage
    browser.ignoreSynchronization = true;
  });

  beforeEach(() => {
    browser.get('https://www.google.fr/');
  });

  it('affiche des résultats de recherche lorsque l\'on entre une donnée dans un champs', () => {
    var rechercheInput = element(by.id('lst-ib'));

    rechercheInput.sendKeys('pierrecle').sendKeys(protractor.Key.ENTER);
    browser.sleep(300);

    var res = element(by.id('res'));
    expect(res.isPresent()).toBe(true);
  });

  it('possède un champs de recherche de 486px avec des bordures bleues', () => {
    var width = 800;
    var height = 600;
    browser.driver.manage().window().setSize(width, height);

    var rechercheInput = element(by.css('.sbibod'));

    rechercheInput.getCssValue('border-color').then((couleur) => {
      expect(couleur).toEqual('rgb(77, 144, 254)');
    });

    rechercheInput.getSize().then((size) => {
      expect(size.width).toEqual(486);
    });
  });
});