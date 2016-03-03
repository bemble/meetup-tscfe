describe("bouton", function() {
  var frame;

  beforeAll((done) => {
    frame = quixote.createFrame({
      width: 800
    }, done);
  });

  afterAll(() => {
    frame.remove();
  });

  beforeEach(() => {
    frame.reset();
    frame.add("<div><style>button { width: 40%; border: 1px solid #0044cc; }</style><button>foo bar</button></div>");
  });

  it("has an overall layout", () => {
    var bouton = frame.get("button");

    expect(bouton.getRawStyle('width')).toEqual('313.594px');
    expect(bouton.getRawStyle('border-color')).toEqual('rgb(0, 68, 204)');
    /*
    expect(rechercheInput)
    logo.assert({
      top: 12,
      center: frame.page().center
    }, "logo should be centered at top of page");
    assert.equal(logo.getRawStyle("text-align"), "center", "logo alt text should be centered");

    navbar.assert({
      top: logo.bottom.plus(10),
      left: frame.page().left,
      width: frame.viewport().width
    }, "navbar should stretch the width of the window");
  });

  it("has a color scheme", function() {
    assert.equal(frame.body().getRawStyle("background-color", BACKGROUND_BLUE, "page background");
    assert.equal(logo.getRawStyle("color", WHITE, "logo text");
    assert.equal(navbar.getRawStyle("background-color", MEDIUM_BLUE, "navbar background color");
    assert.equal(navbar.getRawStyle("color", WHITE, "navbar text");
  });

  it("has a typographic scheme", function() {
    // etc*/
  });

});