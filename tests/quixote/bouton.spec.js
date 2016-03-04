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

  it("spécifie la taille du bouton et la couleur de ses bordures", () => {
    var bouton = frame.get("button");

    expect(bouton.getRawStyle('width')).toEqual('313.594px');
    expect(bouton.getRawStyle('border-color')).toEqual('rgb(0, 68, 204)');
  });

});