describe('instantiation', function() {
  it('should instantiate models', function() {
    var app_model = new PreLinked.Models.AppModel();
    expect(app_model).to.be.an.instanceof(PreLinked.Models.AppModel);
  });

  it('should instantiate views', function() {
    var app_model = new PreLinked.Models.AppModel();
    var app_view = new PreLinked.Views.AppView({
      model: app_model
    });
    // var app = new App();

    // var appView = new AppView({model: app});
    // expect(appView).to.be.an.instanceof(AppView);
  });
});