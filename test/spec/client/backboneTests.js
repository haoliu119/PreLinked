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

describe('add search filters', function() {
  it('should add job titles filter', function() {
    var jobQuery = new PreLinked.Models.AppModel();
    var searchfilterModel = new PreLinked.Models.SearchfilterModel({ jobQuery: jobQuery });

    searchfilterModel.addSearchFilter('software engineer');
    expect(searchfilterModel.jobQuery.get('jobTitle')).to.eql(["software engineer"]);

    searchfilterModel.addSearchFilter('web developer');
    expect(searchfilterModel.jobQuery.get('jobTitle')).to.eql(["software engineer", "web developer"]);
  });

  it('should add companies filter', function() {
    var jobQuery = new PreLinked.Models.AppModel();
    var searchfilterModel = new PreLinked.Models.SearchfilterModel({ jobQuery: jobQuery });

    searchfilterModel.addSearchFilter(undefined, 'Google');
    expect(searchfilterModel.jobQuery.get('company')).to.eql(["Google"]);

    searchfilterModel.addSearchFilter(undefined, 'Yahoo');
    expect(searchfilterModel.jobQuery.get('company')).to.eql(["Google", "Yahoo"]);
  });

  it('should add keywords filter', function() {
      var jobQuery = new PreLinked.Models.AppModel();
      var searchfilterModel = new PreLinked.Models.SearchfilterModel({ jobQuery: jobQuery });

      searchfilterModel.addSearchFilter(undefined, undefined, 'javascript');
      expect(searchfilterModel.jobQuery.get('jobKeywords')).to.eql(["javascript"]);

      searchfilterModel.addSearchFilter(undefined, undefined, 'ruby');
      expect(searchfilterModel.jobQuery.get('jobKeywords')).to.eql(["javascript", "ruby"]);
  });

  it('should add or change distance filter', function() {
      var jobQuery = new PreLinked.Models.AppModel();
      var searchfilterModel = new PreLinked.Models.SearchfilterModel({ jobQuery: jobQuery });

      searchfilterModel.addSearchFilter(undefined, undefined, undefined, 25);
      expect(searchfilterModel.jobQuery.get('distance')).to.eql(25);

      searchfilterModel.addSearchFilter(undefined, undefined, undefined, 35);
      expect(searchfilterModel.jobQuery.get('distance')).to.eql(35);
  });

  it('should add or change minimum salary filter', function() {
      var jobQuery = new PreLinked.Models.AppModel();
      var searchfilterModel = new PreLinked.Models.SearchfilterModel({ jobQuery: jobQuery });

      searchfilterModel.addSearchFilter(undefined, undefined, undefined, undefined, '$100,000');
      expect(searchfilterModel.jobQuery.get('minSalary')).to.eql('$100,000');

      searchfilterModel.addSearchFilter(undefined, undefined, undefined, undefined, '$120,000');
      expect(searchfilterModel.jobQuery.get('minSalary')).to.eql('$120,000');
  });

  it('should add or change maximum salary filter', function() {
    var jobQuery = new PreLinked.Models.AppModel();
    var searchfilterModel = new PreLinked.Models.SearchfilterModel({ jobQuery: jobQuery });

    searchfilterModel.addSearchFilter(undefined, undefined, undefined, undefined, undefined, '$100,000');
    expect(searchfilterModel.jobQuery.get('maxSalary')).to.eql('$100,000');

    searchfilterModel.addSearchFilter(undefined, undefined, undefined, undefined, undefined, '$120,000');
    expect(searchfilterModel.jobQuery.get('maxSalary')).to.eql('$120,000');
  });

  it('should add or change multiple filters', function() {
    var jobQuery = new PreLinked.Models.AppModel();
    var searchfilterModel = new PreLinked.Models.SearchfilterModel({ jobQuery: jobQuery });

    searchfilterModel.addSearchFilter('software engineer', 'Google', 'javascript', 25, '$90,000', '$100,000');
    var attributesData = {
      jobTitle: ['software engineer'],
      company: ['Google'],
      jobKeywords: ['javascript'],
      distance: 25,
      minSalary: '$90,000',
      maxSalary: '$100,000',
      jobLocation: "Mountain View, CA"
    };

    expect(searchfilterModel.jobQuery.attributes).to.eql(attributesData);

    searchfilterModel.addSearchFilter('web developer', 'Yahoo', 'ruby', 35, '$100,000', '$120,000');

    attributesData = {
      jobTitle: ['software engineer', 'web developer'],
      company: ['Google', 'Yahoo'],
      jobKeywords: ['javascript', 'ruby'],
      distance: 35,
      minSalary: '$100,000',
      maxSalary: '$120,000',
      jobLocation: "Mountain View, CA"
    };

    expect(searchfilterModel.jobQuery.attributes).to.eql(attributesData);
  });
});

    // searchfilterModel.addSearchFilter('software engineer', 'Google', 'javascript', '25', '$100,000', '$120,000');

describe('remove filters', function() {
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





