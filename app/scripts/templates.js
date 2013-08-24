this["JST"] = this["JST"] || {};

this["JST"]["app/scripts/templates/app.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"logo-row row\">\n  <nav class=\"top-bar\" style=\"\">\n    <ul class=\"title-area\">\n      <!-- Title Area -->\n      <li class=\"name\">\n\n      </li>\n      <!-- Remove the class \"menu-icon\" to get rid of menu icon. Take out \"Menu\" to just have icon alone -->\n      <li class=\"toggle-topbar menu-icon\"><a href=\"\"><span>Menu</span></a></li>\n    </ul>\n\n    <section class=\"top-bar-section\">\n      <ul class=\"left\">\n        <li class=\"has-dropdown not-click\"><a href=\"/grid.php\">Item 1</a>\n\n          <ul class=\"dropdown\"><li class=\"title back js-generated\"><h5><a href=\"#\">« Back</a></h5></li>\n            <li class=\"\"><label>Level One</label></li>\n            <li class=\"\"><a href=\"#search\">Search</a></li>\n            <li class=\"divider\"></li>\n            <li class=\"\"><a href=\"#\">Sub-item 2</a></li>\n          </ul>\n        </li>\n        <li class=\"divider\"></li>\n      </ul>\n      <!-- Right Nav Section -->\n      <ul class=\"right\">\n        <li class=\"divider hide-for-small\"></li>\n        <li class=\"\"><a href=\"/#login\">Log in</a></li>\n        <li class=\"\"><a href=\"/logout\">Log out</a></li>\n      </ul>\n    </section>\n  </nav>\n\n  <div class=\"large-centered columns\">\n    <div class=\"row collapse\">\n      <br><a href=\"#\"><img class=\"logo\" src=\"https://webfiles.uci.edu/shaohuaz/share/prelinked/prelinked.png\" alt=\"PreLinked\"></a><br>\n    </div>\n  </div>\n</div>\n\n<div id=\"main\">\n  <div class=\"loader\"></div>\n</div>\n\n<div class=\"row\">\n  <div class=\"large-centered columns\">\n    <div class=\"row collapse\">\n      <div id=\"footer\">\n        &copy; PreLinked, 2013\n        <script type=\"text/javascript\">\n          analytics.identify('demo_user', {\n            email : 'demo@prelinked.com'\n          });\n        </script>\n      </div>\n    </div>\n  </div>\n</div>";
  });

this["JST"]["app/scripts/templates/connections.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "\n  <h3>Your Network (";
  if (stack1 = helpers.number_of_connections) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.number_of_connections; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ")</h3>\n  <div id=\"login-box\">\n    <div class=\"loader\"></div>\n  </div>\n\n  <div id=\"connection-results\" class=\"scroll\">\n    <div class=\"loader\"></div>\n  </div>\n\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/connectionsItem.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <img class=\"image\" src=\"";
  if (stack1 = helpers.pictureUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pictureUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\n      <img class=\"image\" src=\"http://placehold.it/80x80\">\n    ";
  }

  buffer += "<div class=\"each-connection\">\n  <a class=\"modal-details\" href=\"#\" data-in-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n    ";
  stack1 = helpers['if'].call(depth0, depth0.pictureUrl, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </a>\n  <ul class=\"info\">\n    <li><h2 class=\"name\"><a class=\"modal-details\" href=\"#\" data-in-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.firstName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.firstName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "&nbsp;";
  if (stack1 = helpers.lastName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lastName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></h2></li>\n    <!-- li>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li -->\n    <li class=\"headline\">";
  if (stack1 = helpers.headline) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.headline; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n    <!--li>";
  if (stack1 = helpers.positions) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.positions; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li-->\n  </ul>\n</div>";
  return buffer;
  });

this["JST"]["app/scripts/templates/home.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\">\n  <div class=\"large-6 columns\">\n    <div class=\"row collapse\">\n      <form id=\"form-home\">\n        <div class=\"large-10 columns\">\n          Search for Jobs near:\n          <a href=\"#search\">\n            <img src=\"http://www.southportlandba.com/wp-content/uploads/2013/06/Maps-and-Geolocation-Marker-icon2.png\">\n            <strong>San Francisco, CA</strong>\n          </a>\n        </div>\n        <div class=\"large-9 columns\">\n          <input class=\"full-width\" name=\"job-title\" type=\"text\" placeholder=\"Enter job title (example: Software Engineer)\">\n        </div>\n        <div class=\"large-3 columns\">\n          <button type=\"submit\" class=\"button prefix\">Search Jobs</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>";
  });

this["JST"]["app/scripts/templates/loginBox.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return "\n    Hello, you are logged in.\n  ";
  }

function program3(depth0,data) {
  
  
  return "\n    <p>Log into LinkedIn to access your network.</p>\n    <a class=\"in-login\" href=\"javascript:;\"><img src=\"http://developer.linkedin.com/sites/all/themes/dlc/img/developer_signin.png\"></a>\n  ";
  }

  buffer += "<div id=\"login-box\" class=\"panel\">\n  ";
  stack1 = helpers['if'].call(depth0, depth0.checkLogin, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });

this["JST"]["app/scripts/templates/modalConnectionDetails.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <img class=\"image\" src=\"";
  if (stack1 = helpers.pictureUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pictureUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n      ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\n        <img class=\"image\" src=\"http://placehold.it/160x160\">\n      ";
  }

  buffer += "<div id=\"myModal\" class=\"reveal-modal\">\n  <div class=\"row\">\n    <div class=\"large-2 columns\">\n      ";
  stack1 = helpers['if'].call(depth0, depth0.pictureUrl, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    <div class=\"large-10 columns info\">\n      <h2>";
  if (stack1 = helpers.firstName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.firstName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.lastName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lastName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h2>\n      <p>";
  if (stack1 = helpers.headline) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.headline; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n    </div>\n  </div>\n    <div class=\"row\">\n      <div class=\"large-2 columns\">&nbsp;</div>\n      <div class=\"large-5 columns\">\n        <ul class=\"list\">\n          <li>title: ";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n          <li>industry: ";
  if (stack1 = helpers.industry) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.industry; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n          <li>id: ";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n          <li>positions: ";
  if (stack1 = helpers.positions) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.positions; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n        </ul>\n      </div>\n      <div class=\"large-5 columns\">\n        <p>summary: ";
  if (stack1 = helpers.summary) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.summary; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n      </div>\n    </div>\n\n  <a class=\"close-reveal-modal\">&#215;</a>\n</div>";
  return buffer;
  });

this["JST"]["app/scripts/templates/page.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<p>Your content here.</p>\n\n";
  });

this["JST"]["app/scripts/templates/pmodal.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<p>Your content here.</p>\n\n";
  });

this["JST"]["app/scripts/templates/search.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\">\n  <div id=\"search-filters\" class=\"large-3 columns\">\n    <div class=\"loader\"></div>\n  </div>\n  <div id=\"job-results\" class=\"large-5 columns\">\n    <div class=\"loader\"></div>\n  </div>\n  <div id=\"connections\" class=\"large-4 columns\">\n    <div class=\"loader\"></div>\n  </div>\n</div>";
  });

this["JST"]["app/scripts/templates/searchFilter.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "";
  buffer += "\n      <a class=\"filter-item button tiny round secondary removeJobTitleFilter removeFilter\">\n        "
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "<span class=\"rm removeJobTitleFilter "
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\">\n        &times;\n        </span>\n      </a>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "";
  buffer += "\n      <a class=\"filter-item button tiny round secondary removeCompanyFilter removeFilter\">\n        "
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "<span class=\"rm removeCompanyFilter "
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\">\n        &times;\n        </span>\n      </a>\n    ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <a class=\"filter-item button tiny round secondary removeFilter\">\n        ";
  if (stack1 = helpers.jobLocation) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.jobLocation; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " <span class=\"rm removeJobLocationFilter "
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\">&times;</span>\n      </a>\n    ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "";
  buffer += "\n      <a class=\"filter-item button tiny round secondary removeFilter\">\n        "
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "<span class=\"rm removeJobKeywordsFilter "
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\">&times;</span>\n      </a>\n    ";
  return buffer;
  }

  buffer += "<h3>Search Jobs</h3>\n<form id=\"form-search\">\n  <label>\n    Job Title\n    <input class=\"searchInput\" id=\"jobTitleSearchInput\" name=\"job-title\" type=\"text\" placeholder=\"Example: Software Engineer\">\n  </label>\n  <div>\n    ";
  stack1 = helpers.each.call(depth0, depth0.jobTitle, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n  <label>\n    Company\n    <input class=\"searchInput\" id=\"companySearchInput\" name=\"company\" type=\"text\" placeholder=\"Example: Google\">\n  </label>\n  <div>\n    ";
  stack1 = helpers.each.call(depth0, depth0.company, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n  <label>\n    Location\n    <input class=\"searchInput\" id=\"locationSearchInput\" name=\"job-location\" type=\"text\" placeholder=\"Example: San Francisco, CA\">\n  </label>\n  <div>\n    ";
  stack1 = helpers['if'].call(depth0, depth0.jobLocation, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n  <label>\n    Keywords\n    <input class=\"searchInput\" id=\"keywordsSearchInput\" name=\"job-keywords\" type=\"text\" placeholder=\"Example: Javascript, Node.js\">\n  </label>\n  <div>\n    ";
  stack1 = helpers.each.call(depth0, depth0.jobKeywords, {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n  <button class=\"searchFilterButton expand\">Search</button>\n</form>";
  return buffer;
  });

this["JST"]["app/scripts/templates/searchResults.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h3>Jobs for \"";
  if (stack1 = helpers.jobTitle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.jobTitle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" (";
  if (stack1 = helpers.jobCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.jobCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ")</h3>\n\n<div>\n  <a class=\"sortAsc\" href=\"\">sort asc</a>\n  <span> | </span>\n  <a class=\"sortDesc\" href=\"\">sort desc</a>\n</div>\n\n<div class=\"jobResults\">\n  <div class=\"loader\"></div>\n</div>";
  return buffer;
  });

this["JST"]["app/scripts/templates/searchResultsItem.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      ";
  if (stack1 = helpers.city) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.city; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ",\n    ";
  return buffer;
  }

  buffer += "<h2 class=\"title\"><a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\">";
  if (stack1 = helpers.jobtitle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.jobtitle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></h2>\n<ul class=\"small-10 info columns\">\n  <li class=\"company\">";
  if (stack1 = helpers.company) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.company; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.pScore) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pScore; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n  <li class=\"location\">\n    ";
  stack1 = helpers['if'].call(depth0, depth0.city, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  if (stack1 = helpers.state) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.state; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n  </li>\n  <!-- <li>\n    jobkey: ";
  if (stack1 = helpers.jobkey) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.jobkey; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n  </li>\n  <li>\n    snippet: ";
  if (stack1 = helpers.snippet) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.snippet; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n  </li>\n  <li>\n    formattedLocation: ";
  if (stack1 = helpers.formattedLocation) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.formattedLocation; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n  </li>\n  <li>\n    formattedLocationFull: ";
  if (stack1 = helpers.formattedLocationFull) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.formattedLocationFull; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n  </li>\n  <li>\n    formattedRelativeTime: ";
  if (stack1 = helpers.formattedRelativeTime) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.formattedRelativeTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n  </li>\n\n  <li>\n    date: ";
  if (stack1 = helpers.date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n  </li>\n  <li>\n    expired: ";
  if (stack1 = helpers.expired) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.expired; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n  </li>\n  <li>\n    country: ";
  if (stack1 = helpers.country) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.country; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n  </li>\n  <li>\n    latitude: ";
  if (stack1 = helpers.latitude) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.latitude; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n  </li>\n  <li>\n    longitude: ";
  if (stack1 = helpers.longitude) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.longitude; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n  </li>\n  <li>\n    source: ";
  if (stack1 = helpers.source) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.source; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n  </li>\n  <li>\n    sponsored: ";
  if (stack1 = helpers.sponsored) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.sponsored; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n  </li>\n  <li>\n    url: ";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n  </li>\n  <li>\n    onmousedown: ";
  if (stack1 = helpers.onmousedown) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.onmousedown; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n  </li> -->\n</ul>\n<ul class=\"small-2 columns\">\n  <li><a class=\"tiny button right showConnectButton\">Info</a></li>\n</ul>\n";
  return buffer;
  });