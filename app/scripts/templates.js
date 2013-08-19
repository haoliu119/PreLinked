this["JST"] = this["JST"] || {};

this["JST"]["app/scripts/templates/app.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div>\n  <h1>\n    ";
  if (stack1 = helpers.app_title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.app_title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n  </h1>\n</div>\n<div id=\"main\">\n  Loading...\n</div>\n";
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
  


  return "<div class=\"row\">\n  <div class=\"small-8 large-centered columns\">\n    <div class=\"row collapse\">\n      <form id=\"form-home\">\n        <h1><img src=\"https://webfiles.uci.edu/shaohuaz/share/prelinked/prelinked.png\" alt=\"PreLinked\"></h1>\n        <div class=\"small-8 columns\">\n          Search for Jobs near:\n          <a href=\"#search\">\n            <img src=\"http://www.southportlandba.com/wp-content/uploads/2013/06/Maps-and-Geolocation-Marker-icon2.png\">\n            <strong>San Francisco, CA</strong>\n          </a>\n\n        </div>\n        <div class=\"small-6 columns\">\n          <input name=\"job-title\" type=\"text\" placeholder=\"Enter job title (example: Software Engineer)\">\n        </div>\n        <div class=\"small-2 columns\">\n          <button type=\"submit\" class=\"button prefix\">Search</button>\n        </div>\n        <div class=\"small-1 columns\">\n        </div>\n      </form>\n    </div>\n  </div>\n</div>";
  });

this["JST"]["app/scripts/templates/page.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<p>Your content here.</p>\n\n";
  });

this["JST"]["app/scripts/templates/search.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div>\n          <a href=\"#\">";
  if (stack1 = helpers.job) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.job; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n        </div>\n      ";
  return buffer;
  }

  buffer += "<div class=\"row\">\n  <div class=\"large-3 columns\">\n    <h3>Search</h3>\n    <form id=\"form-search\">\n      <label>\n        Job\n        <input name=\"job-title\" type=\"text\" placeholder=\"Example: Software Engineer\">\n      </label>\n      <label>\n        Location\n        <input name=\"job-location\" type=\"text\" placeholder=\"Example: San Francisco, CA\">\n      </label>\n      <label>\n        Keywords\n        <input name=\"job-keywords\" type=\"text\" placeholder=\"Example: Javascript, Node.js\">\n      </label>\n\n      <p>Salary</p>\n      <ul>\n        <li><label><input type=\"checkbox\" name=\"item\" value=\"1\"> item1</label></li>\n        <li><label><input type=\"checkbox\" name=\"item\" value=\"1\"> item1</label></li>\n        <li><label><input type=\"checkbox\" name=\"item\" value=\"1\"> item1</label></li>\n      </ul>\n\n      <p>Title</p>\n      <ul>\n        <li><label><input type=\"checkbox\" name=\"item\" value=\"1\"> item1</label></li>\n        <li><label><input type=\"checkbox\" name=\"item\" value=\"1\"> item1</label></li>\n        <li><label><input type=\"checkbox\" name=\"item\" value=\"1\"> item1</label></li>\n      </ul>\n      \n      <p>Company</p>\n      <ul>\n        <li><label><input type=\"checkbox\" name=\"item\" value=\"1\"> item1</label></li>\n        <li><label><input type=\"checkbox\" name=\"item\" value=\"1\"> item1</label></li>\n        <li><label><input type=\"checkbox\" name=\"item\" value=\"1\"> item1</label></li>\n      </ul>\n      <button type=\"submit\">Search</button>\n    </form>\n  </div>\n  <div class=\"large-5 columns\">\n    <fieldset>\n      <legend>";
  if (stack1 = helpers.jobCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.jobCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " results for \"";
  if (stack1 = helpers.jobTitle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.jobTitle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"</legend>\n      ";
  stack1 = helpers.each.call(depth0, depth0.searchResultsItem, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </fieldset>\n    <fieldset>\n      <legend><a href=\"#\">";
  if (stack1 = helpers.jobTitle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.jobTitle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></legend>\n      <p>\n        Butcher gluten-free craft beer, est you probably haven't heard of them Neutra vegan. Hella actually velit, Brooklyn Vice esse sed art party cardigan deserunt beard tattooed. Tofu hella exercitation deep v bespoke. Odd Future authentic roof party pickled, messenger bag mollit Pinterest consequat fashion axe shabby chic seitan kogi irony nihil. Nisi you probably haven't heard of them wolf ut. Godard eiusmod fashion axe four loko adipisicing sartorial, gastropub proident labore selfies esse kitsch culpa High Life. Authentic hella locavore qui, pug sustainable gastropub Pinterest put a bird on it craft beer selfies Vice.\n      </p>\n    </fieldset>\n  </div>\n  <div class=\"large-4 columns\">\n    <div>\n      <img src=\"http://placekitten.com/g/50/50\">\n      <img src=\"http://placekitten.com/g/50/50\">\n      <img src=\"http://placekitten.com/g/50/50\">\n      <img src=\"http://placekitten.com/g/50/50\">\n      <img src=\"http://placekitten.com/g/50/50\">\n    </div>\n    <fieldset>\n      <legend><a href=\"#\">Homer Simpson</a></legend>\n      <h3>Nuclear Power Technician</h3>\n      <img src=\"http://placekitten.com/g/50/50\">\n      <p>\n        Butcher gluten-free craft beer, est you probably havent heard of them Neutra vegan. Hella actually velit, Brooklyn Vice esse sed art party cardigan deserunt beard tattooed. Tofu hella exercitation deep v bespoke. Odd Future authentic roof party pickled, messenger bag mollit Pinterest consequat fashion axe shabby chic seitan kogi irony nihil.\n      </p>\n    </fieldset>\n  </div>\n</div>";
  return buffer;
  });

this["JST"]["app/scripts/templates/searchFilter.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<p>Your content here.</p>\n\n";
  });

this["JST"]["app/scripts/templates/searchForm.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<label>\n  Job Search\n  <input type=\"text\" placeholder=\"text\">\n</label>\n<label>\n  Location\n  <input type=\"text\" placeholder=\"text\">\n</label>\n<select>\n  <option>option 1</option>\n  <option>option 2</option>\n  <option>option 3</option>\n</select>\n<label><input type=\"radio\" name=\"item\" value=\"1\"> item1</label>\n<label><input type=\"radio\" name=\"item\" value=\"1\"> item1</label>\n<label><input type=\"radio\" name=\"item\" value=\"1\"> item1</label>\n<label><input type=\"checkbox\" name=\"item\" value=\"1\"> item1</label>\n<label><input type=\"checkbox\" name=\"item\" value=\"1\"> item1</label>\n<label><input type=\"checkbox\" name=\"item\" value=\"1\"> item1</label>";
  });

this["JST"]["app/scripts/templates/searchResults.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<fieldset>\n  <legend>";
  if (stack1 = helpers.jobCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.jobCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " results for \"Software Engineer\"</legend>\n  <div class=\"jobResults\">\n    Loading...\n  </div>\n</fieldset>";
  return buffer;
  });

this["JST"]["app/scripts/templates/searchResultsItem.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"job\">\n  <ul>\n    <li>\n      company: ";
  if (stack1 = helpers.company) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.company; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </li>\n    <li>\n      jobtitle: ";
  if (stack1 = helpers.jobtitle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.jobtitle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </li>\n    <li>\n      jobkey: ";
  if (stack1 = helpers.jobkey) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.jobkey; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </li>\n    <li>\n      snippet: ";
  if (stack1 = helpers.snippet) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.snippet; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </li>\n    <li>\n      formattedLocation: ";
  if (stack1 = helpers.formattedLocation) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.formattedLocation; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </li>\n    <li>\n      formattedLocationFull: ";
  if (stack1 = helpers.formattedLocationFull) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.formattedLocationFull; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </li>\n    <li>\n      formattedRelativeTime: ";
  if (stack1 = helpers.formattedRelativeTime) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.formattedRelativeTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </li>\n\n    <li>\n      date: ";
  if (stack1 = helpers.date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </li>\n    <li>\n      expired: ";
  if (stack1 = helpers.expired) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.expired; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </li>\n    <li>\n      city: ";
  if (stack1 = helpers.city) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.city; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </li>\n    <li>\n      state: ";
  if (stack1 = helpers.state) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.state; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </li>\n    <li>\n      country: ";
  if (stack1 = helpers.country) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.country; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </li>\n    <li>\n      latitude: ";
  if (stack1 = helpers.latitude) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.latitude; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </li>\n    <li>\n      longitude: ";
  if (stack1 = helpers.longitude) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.longitude; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </li>\n    <li>\n      source: ";
  if (stack1 = helpers.source) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.source; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </li>\n    <li>\n      sponsored: ";
  if (stack1 = helpers.sponsored) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.sponsored; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </li>\n    <li>\n      url: ";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </li>\n    <li>\n      onmousedown: ";
  if (stack1 = helpers.onmousedown) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.onmousedown; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </li>\n  </ul>\n</div>";
  return buffer;
  });