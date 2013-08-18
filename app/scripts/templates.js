this["JST"] = this["JST"] || {};

this["JST"]["app/scripts/templates/app.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h1>page</h1>\n<div>\n  ";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n</div>\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/connection.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<p>Your content here.</p>\n<ul>\n<li>\n<li>\n    <!-- Where our To Do items will go -->\n</ul>\n";
  });

this["JST"]["app/scripts/templates/home.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\">\n  <div class=\"small-10 large-centered columns\">\n    <div class=\"row collapse\">\n      <form>\n        <h1>Pre-Linked</h1>\n        <div class=\"small-5 columns\">\n          <label>Job</label>\n          <input type=\"text\" placeholder=\"Example: Software Engineer\">\n        </div>\n        <div class=\"small-5 columns\">\n          <label>Location</label>\n          <input type=\"text\" placeholder=\"Example: San Francisco, CA\">\n        </div>\n        <div class=\"small-2 columns\">\n          &nbsp;\n          <button class=\"button prefix\">Search</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>";
  });

this["JST"]["app/scripts/templates/page.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<p>Your content here.</p>\n\n";
  });

this["JST"]["app/scripts/templates/search.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row\">\n  <div class=\"large-3 columns\">\n    <label>\n      Job Search\n      <input type=\"text\" placeholder=\"text\">\n    </label>\n    <label>\n      Location\n      <input type=\"text\" placeholder=\"text\">\n    </label>\n    <select>\n      <option>option 1</option>\n      <option>option 2</option>\n      <option>option 3</option>\n    </select>\n    <label><input type=\"radio\" name=\"item\" value=\"1\"> item1</label>\n    <label><input type=\"radio\" name=\"item\" value=\"1\"> item1</label>\n    <label><input type=\"radio\" name=\"item\" value=\"1\"> item1</label>\n    <label><input type=\"checkbox\" name=\"item\" value=\"1\"> item1</label>\n    <label><input type=\"checkbox\" name=\"item\" value=\"1\"> item1</label>\n    <label><input type=\"checkbox\" name=\"item\" value=\"1\"> item1</label>\n  </div>\n  <div class=\"large-5 columns\">\n    <fieldset>\n      <legend>";
  if (stack1 = helpers.jobCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.jobCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " results for \"";
  if (stack1 = helpers.jobTitle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.jobTitle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"</legend>\n      <div>\n        <a href=\"#\">Software Engineer</a>\n      </div>\n      <div>\n        <a href=\"#\">Software Engineer</a>\n      </div>\n      <div>\n        <a href=\"#\">Software Engineer</a>\n      </div>\n    </fieldset>\n    <fieldset>\n      <legend><a href=\"#\">Software Engineer</a></legend>\n      <p>\n        Butcher gluten-free craft beer, est you probably haven't heard of them Neutra vegan. Hella actually velit, Brooklyn Vice esse sed art party cardigan deserunt beard tattooed. Tofu hella exercitation deep v bespoke. Odd Future authentic roof party pickled, messenger bag mollit Pinterest consequat fashion axe shabby chic seitan kogi irony nihil. Nisi you probably haven't heard of them wolf ut. Godard eiusmod fashion axe four loko adipisicing sartorial, gastropub proident labore selfies esse kitsch culpa High Life. Authentic hella locavore qui, pug sustainable gastropub Pinterest put a bird on it craft beer selfies Vice.\n      </p>\n    </fieldset>\n  </div>\n  <div class=\"large-4 columns\">\n    <div>\n      <img src=\"http://placekitten.com/g/50/50\">\n      <img src=\"http://placekitten.com/g/50/50\">\n      <img src=\"http://placekitten.com/g/50/50\">\n      <img src=\"http://placekitten.com/g/50/50\">\n      <img src=\"http://placekitten.com/g/50/50\">\n    </div>\n    <fieldset>\n      <legend><a href=\"#\">Homer Simpson</a></legend>\n      <h3>Nuclear Power Technician</h3>\n      <img src=\"http://placekitten.com/g/50/50\">\n      <p>\n        Butcher gluten-free craft beer, est you probably havent heard of them Neutra vegan. Hella actually velit, Brooklyn Vice esse sed art party cardigan deserunt beard tattooed. Tofu hella exercitation deep v bespoke. Odd Future authentic roof party pickled, messenger bag mollit Pinterest consequat fashion axe shabby chic seitan kogi irony nihil.\n      </p>\n    </fieldset>\n  </div>\n</div>";
  return buffer;
  });

this["JST"]["app/scripts/templates/searchResults.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<fieldset>\n  <legend>432 results for \"Software Engineer\"</legend>\n  <div>\n    <a href=\"#\">Software Engineer</a>\n  </div>\n  <div>\n    <a href=\"#\">Software Engineer</a>\n  </div>\n  <div>\n    <a href=\"#\">Software Engineer</a>\n  </div>\n</fieldset>";
  });

this["JST"]["app/scripts/templates/searchResultsItem.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div>\n  <a href=\"#\">Software Engineer</a>\n</div>";
  });