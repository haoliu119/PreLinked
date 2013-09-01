this["JST"] = this["JST"] || {};

this["JST"]["app/scripts/templates/app.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"notification\" style=\"display:none\">\n  <div class=\"message\"></div>\n  <a class=\"close-notification\" href=\"javascript:;\">&times;</a>\n</div>\n<div class=\"page\">\n  <div class=\"header\">\n    <header>\n      <div class=\"logo-row row\">\n        <div class=\"large-centered columns\">\n          <div class=\"row\">\n            <div class=\"large-8 small-8 columns\">\n                <a href=\"/#home\"><img class=\"logo\" src=\"https://webfiles.uci.edu/shaohuaz/share/prelinked/prelinked.png\" alt=\"PreLinked\"></a>\n              </div>\n            <div id=\"user-view\" class=\"large-4 small-4 columns\"></div>\n          </div>\n        </div>\n      </div>\n    </header>\n  </div>\n\n  <div class=\"show-for-small row\">\n    <a id=\"tab-search\" data-tab=\"search\" class=\"arrow_box small-4 columns tab\" href=\"javascript:;\">Search Filters</a>\n    <a id=\"tab-jobs\" data-tab=\"jobs\" class=\"arrow_box small-4 columns tab\" href=\"javascript:;\">Job Results</a>\n    <a id=\"tab-network\" data-tab=\"network\" class=\"arrow_box small-4 columns tab\" href=\"javascript:;\">Network</a>\n  </div>\n\n  <div id=\"main\">\n    <div class=\"loader\"></div>\n  </div>\n</div><!-- .page -->\n\n<div class=\"footer\">\n  <footer>\n    <div class=\"row\">\n      <div class=\"large-centered columns\">\n        <div class=\"row collapse\">\n          <div id=\"footer\">\n            <div class=\"left col\">\n              <strong>&copy; PreLinked, 2013</strong>\n            </div>\n            <div class=\"left col\">\n              <div><strong>Powered By:</strong></div>\n              <a href=\"http://www.linkedin.com\" target=\"_blank\"><i class=\"icon-linkedin\"></i></a> +\n              <a href=\"http://www.indeed.com\" target=\"_blank\"><i class=\"icon-indeed\"></i></a>\n            </div>\n            <div class=\"left col\">\n              <div><strong>Made At:</strong></div>\n              <a href=\"http://hackreactor.com\" target=\"_blank\"><i class=\"icon-hackreactor\"></i></a>\n            </div>\n            <div class=\"left col\">\n              <div><strong>Hire Us:</strong></div>\n              <a href=\"http://haoliu.me/\" target=\"_blank\">Hao Liu</a><br>\n              <a href=\"http://getshao.com/\" target=\"_blank\">ShaoHua Zhou</a><br>\n              <a href=\"http://www.linkedin.com/in/stephenportanova\" target=\"_blank\">Stephen Portanova</a><br>\n              <a href=\"http://barrymwong.com/\" target=\"_blank\">Barry Wong</a>\n            </div>\n            <div class=\"left col\">\n              <div><strong>Fork Me!</strong></div>\n              <a href=\"https://github.com/haoliu119/prelinked\" target=\"_blank\"><i class=\"icon-github\"></i></a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>\n</div><!-- .footer -->\n<script type=\"text/javascript\">\n  analytics.identify('demo_user', {\n    email : 'demo@prelinked.com'\n  });\n</script>";
  });

this["JST"]["app/scripts/templates/connections.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "\n  <p class=\"allResults\"><strong>";
  if (stack1 = helpers.number_of_connections) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.number_of_connections; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " related connections</strong></p>\n  Connections:\n  <button id=\"all-connections\" class=\"tiny\">All</button>\n  <div id=\"login-box\">\n    <div class=\"loader\"></div>\n  </div>\n\n  <div id=\"connection-results\" class=\"scroll\">\n    <div class=\"loader\"></div>\n  </div>\n\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/connectionsItem.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

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
  
  
  return "\n      <img class=\"image\" src=\"https://webfiles.uci.edu/shaohuaz/share/prelinked/profile.png\">\n    ";
  }

function program5(depth0,data) {
  
  
  return "\n      ";
  }

function program7(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

  buffer += "<div class=\"each-connection\">\n  <a class=\"modal-details\" href=\"#\" data-in-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n    ";
  stack1 = helpers['if'].call(depth0, depth0.pictureUrl, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <div class=\"degree\">\n      ";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  stack2 = ((stack1 = helpers.checkDegree || depth0.checkDegree),stack1 ? stack1.call(depth0, depth0.distance, options) : helperMissing.call(depth0, "checkDegree", depth0.distance, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    </div>\n  </a>\n  <ul class=\"info\">\n    <li>\n      <h2 class=\"name\">\n        <a class=\"modal-details\" href=\"#\" data-in-id=\"";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">";
  if (stack2 = helpers.firstName) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.firstName; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "&nbsp;";
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data};
  stack2 = ((stack1 = helpers.truncateName || depth0.truncateName),stack1 ? stack1.call(depth0, depth0.lastName, options) : helperMissing.call(depth0, "truncateName", depth0.lastName, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</a>\n        <div class=\"numberOfConnections\"> ";
  if (stack2 = helpers.numConnections) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.numConnections; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " </div>\n      </h2>\n    </li>\n    <li class=\"headline\">";
  if (stack2 = helpers.headline) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.headline; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</li>\n    <li class=\"connectionLocation\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.location),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n  </ul>\n</div>";
  return buffer;
  });

this["JST"]["app/scripts/templates/home.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row\">\n  <div class=\"large-7 small-10 small-centered large-centered columns\">\n    <div class=\"row collapse\">\n      <div class=\"home-content\">\n        <div class=\"large-12 columns\">\n          <div class=\"row\">\n            <div class=\"home-search-text\">\n              <strong>Search for Jobs</strong> near:\n              <span class=\"wsn\"><strong><a href=\"#\" data-dropdown=\"drop1\" id=\"jobLocation\">";
  if (stack1 = helpers.jobLocation) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.jobLocation; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></strong>\n              <a href=\"#\" class=\"geoLocation\"><img src=\"https://webfiles.uci.edu/shaohuaz/share/prelinked/geolocate.png\" height=\"20\" width=\"20\"></a></span>\n            <div>\n            <form id=\"form-location\">\n              <ul id=\"drop1\" class=\"f-dropdown medium\" data-dropdown-content>\n                <li>\n                  <div class=\"small-9 large-9 columns\">\n                    <input class=\"full-width\" name=\"job-location\" type=\"text\" placeholder=\"City, State, or ZIP\">\n                  </div>\n                  <div class=\"small-3 large-3 columns\">\n                    <button type=\"submit\" class=\"button prefix\">Update</button>\n                  </div>\n                </li>\n              </ul>\n            </form>\n\n          </div>\n          <div class=\"row\">\n            <form id=\"form-home\">\n              <div class=\"large-9 columns\">\n                <input class=\"full-width\" name=\"job-title\" type=\"text\" placeholder=\"Job Title (example: Software Engineer)\">\n              </div>\n              <div class=\"large-3 columns\">\n                <button type=\"submit\" class=\"button prefix\">Search Jobs</button>\n              </div>\n              <div class=\"clearfix\"></div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
  return buffer;
  });

this["JST"]["app/scripts/templates/loginBox.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return "\n    <div></div>\n  ";
  }

function program3(depth0,data) {
  
  
  return "\n    <div class=\"panel\">\n      <p>Log into LinkedIn to access your network.</p>\n      <a class=\"in-login\" href=\"/auth/linkedin\"><img src=\"http://developer.linkedin.com/sites/all/themes/dlc/img/developer_signin.png\"></a>\n    </div>\n  ";
  }

  buffer += "<div id=\"login-box\">\n  ";
  stack1 = helpers['if'].call(depth0, depth0.checkLogin, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });

this["JST"]["app/scripts/templates/modalConnectionDetails.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <img class=\"image\" src=\"";
  if (stack1 = helpers.pictureUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pictureUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\n    <img class=\"image\" src=\"http://placehold.it/160x160\">\n    ";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <li class='position'>"
    + escapeExpression(((stack1 = depth0.title),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " @ "
    + escapeExpression(((stack1 = ((stack1 = depth0.company),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n    ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <a class=\"interConnectionInfo\" title=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.inPerson),stack1 == null || stack1 === false ? stack1 : stack1.firstName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = depth0.inPerson),stack1 == null || stack1 === false ? stack1 : stack1.lastName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = depth0.inPerson),stack1 == null || stack1 === false ? stack1 : stack1.distance)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " Degree\" target=\"_blank\"\n    href=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.inPerson),stack1 == null || stack1 === false ? stack1 : stack1.publicProfileUrl)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n      <li class=\"interConnectionInfoLI\">\n        <img src=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.inPerson),stack1 == null || stack1 === false ? stack1 : stack1.pictureUrl)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/>\n      </li>\n    </a>\n  ";
  return buffer;
  }

  buffer += "<div class=\"row\">\n  <div class=\"large-2 columns\">\n    ";
  stack1 = helpers['if'].call(depth0, depth0.pictureUrl, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n  <div class=\"large-10 columns info modalHeader\">\n    <h2 class='name'>";
  if (stack1 = helpers.firstName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.firstName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.lastName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lastName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h2>\n    <div class=\"industry\"> <span class=\"sectionLabel\"> Industry: </span> ";
  if (stack1 = helpers.industry) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.industry; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    </br>\n    <p class=\"sectionLabel inline\">Headline:&nbsp; </p><p class=\"inline\">";
  if (stack1 = helpers.headline) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.headline; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"large-2 columns\">&nbsp;</div>\n  <div class=\"positionsHeader sectionLabel\"> Positions: </div>\n  <ul class=\"positions\">\n    ";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.positions),stack1 == null || stack1 === false ? stack1 : stack1.values), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n  </ul>\n</div>\n<div class=\"summaryHeader sectionLabel\"> Summary: </div>\n<p class=\"summary\">";
  if (stack2 = helpers.summary) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.summary; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</p>\n<div class=\"sectionLabel showRelations\"> How You're Connected: </div>\n<ul>\n  ";
  stack2 = helpers.each.call(depth0, depth0.interConnections, {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</ul>\n<div class='viewProfileContainer'>\n  <a class=\"viewProfileButton\" target=\"_blank\" href=\"";
  if (stack2 = helpers.publicProfileUrl) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.publicProfileUrl; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\n    <button class=\"profileButton\">View Profile On LinkedIn</button>\n  </a>\n</div>";
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
  


  return "<div class=\"columns-box row\">\n  <div id=\"column-search\" class=\"on search-col large-3 columns collapse\">\n    <div class=\"row hide-for-small\">\n      <h2 class=\"title-header title-search arrow_box\">Job Search</h2>\n    </div>\n    <div class=\"row column-left\">\n      <div class=\"column\">\n        <div id=\"search-filters\">\n          <div class=\"loader\"></div>\n        </div>\n        <div id=\"search-recent\">\n          <div class=\"loader\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div id=\"column-jobs\" class=\"search-col large-5 columns collapse\">\n    <div class=\"row hide-for-small\">\n      <h2 class=\"title-header title-jobs arrow_box\">Job Results</h2>\n    </div>\n    <div class=\"row column-mid\">\n      <div class=\"column\">\n        <div id=\"job-results\">\n          <div class=\"loader\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div id=\"column-network\" class=\"search-col large-4 columns collapse\">\n    <div class=\"row hide-for-small\">\n      <h2 class=\"title-header title-network\">Network</h2>\n    </div>\n    <div class=\"row column-right\">\n      <div class=\"column\">\n        <div id=\"connections\">\n          <div class=\"loader\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
  });

this["JST"]["app/scripts/templates/searchFilter.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n      <a class=\"filter-item button tiny round secondary removeJobTitleFilter removeFilter\">\n        "
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "<span class=\"rm removeJobTitleFilter ";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.concatWord || depth0.concatWord),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "concatWord", depth0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n        &times;\n        </span>\n      </a>\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return " ";
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n      <a class=\"filter-item button tiny round secondary removeCompanyFilter removeFilter\">\n        "
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "<span class=\"rm removeCompanyFilter ";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.concatWord || depth0.concatWord),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "concatWord", depth0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n        &times;\n        </span>\n      </a>\n    ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n      <a class=\"filter-item button tiny round secondary removeFilter\">\n        "
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "<span class=\"rm removeJobKeywordsFilter ";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.concatWord || depth0.concatWord),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "concatWord", depth0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">&times;</span>\n      </a>\n    ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n        ";
  options = {hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),data:data};
  stack2 = ((stack1 = helpers.ifCond || depth0.ifCond),stack1 ? stack1.call(depth0, depth0, "None", options) : helperMissing.call(depth0, "ifCond", depth0, "None", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n      ";
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = "";
  buffer += "\n          <option value=\"None\" data-id=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\">None</option>\n        ";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "";
  buffer += "\n          <option value=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\" data-id=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\">$"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + ",000</option>\n        ";
  return buffer;
  }

  buffer += "<div>\n  <label>\n  <a href=\"#\" class=\"geoLocation\"><img src=\"https://webfiles.uci.edu/shaohuaz/share/prelinked/geolocate.png\" height=\"20\" width=\"20\"></a>\n    <strong><a href=\"#\" data-dropdown=\"drop2\" id=\"jobLocation\">";
  if (stack1 = helpers.jobLocation) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.jobLocation; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></strong>\n  </label>\n\n</div>\n<form id=\"form-location-search\">\n  <ul id=\"drop2\" class=\"f-dropdown medium\" data-dropdown-content>\n    <li>\n      <div>\n        <input class=\"full-width\" name=\"job-location\" type=\"text\" placeholder=\"Location: city, state, or zip\">\n      </div>\n      <div>\n        <button type=\"submit\" class=\"button prefix\">Update</button>\n      </div>\n    </li>\n  </ul>\n</form>\n\n<form id=\"form-search\">\n  <label>Job Title</label>\n  <div class=\"inputFilter\">\n    <input class=\"searchInput\" id=\"jobTitleSearchInput\" name=\"job-title\" type=\"text\" placeholder=\"Example: Engineer\">\n    <button class=\"addFilterButton tiny\" data-id=\"jobTitle\">Add</button>\n  <div>\n  <div>\n    ";
  stack1 = helpers.each.call(depth0, depth0.jobTitle, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n  <label>Company</label>\n  <div class=\"inputFilter\">\n    <input class=\"searchInput\" id=\"companySearchInput\" name=\"company\" type=\"text\" placeholder=\"Example: Google\">\n    <button class=\"addFilterButton tiny\" data-id=\"company\">Add</button>\n  </div>\n  <div>\n    ";
  stack1 = helpers.each.call(depth0, depth0.company, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n  <label>Keywords\n  </label>\n  <div class=\"inputFilter\">\n    <input class=\"searchInput\" id=\"keywordsSearchInput\" name=\"job-keywords\" type=\"text\" placeholder=\"Example: Javascript\">\n    <button class=\"addFilterButton tiny\">Add</button>\n  </div>\n  <div>\n    ";
  stack1 = helpers.each.call(depth0, depth0.jobKeywords, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n  <label>Distance</label>\n  <div>\n    <input class=\"distanceRangeSlider\" type=\"range\" name=\"distance\" min=\"1\" max=\"100\" value=\"";
  if (stack1 = helpers.distance) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.distance; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n    <span class=\"distanceRange\">";
  if (stack1 = helpers.distance) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.distance; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Miles</span>\n  </div>\n  <br>\n  <label>Min Salary</label>\n  <p>\n    <select id='minSalary'>\n      ";
  stack1 = helpers.each.call(depth0, depth0.salaryList, {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </select>\n    <label>Max Salary</label>\n    <select id='maxSalary'>\n      ";
  stack1 = helpers.each.call(depth0, depth0.salaryList, {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </select>\n  </p>\n</form>\n<button class=\"searchFilterButton expand\">Search</button>\n\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/searchRecent.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<p>Recent Searches</p>\n<div id=\"search-recent-details\">\n  <ul>\n    <li><a href=\"javascript:;\">recent 1</a></li>\n    <li><a href=\"javascript:;\">recent 2</a></li>\n    <li><a href=\"javascript:;\">recent 3</a></li>\n  </ul>\n</div>\n\n";
  });

this["JST"]["app/scripts/templates/searchRecentItem.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n    <span>Title: </span>\n    ";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.data),stack1 == null || stack1 === false ? stack1 : stack1.jobTitle), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "<br>\n  ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "";
  buffer += "\n      <span>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + ", </span>\n    ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n    <span>Company: </span>\n    ";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.data),stack1 == null || stack1 === false ? stack1 : stack1.company), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "<br>\n  ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <span>Location: </span>\n    <span>"
    + escapeExpression(((stack1 = ((stack1 = depth0.data),stack1 == null || stack1 === false ? stack1 : stack1.jobLocation)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span><br>\n  ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n    <span>Keywords: </span>\n    ";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.data),stack1 == null || stack1 === false ? stack1 : stack1.jobKeywords), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "<br>\n  ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <span>Distance: </span>\n    <span>"
    + escapeExpression(((stack1 = ((stack1 = depth0.data),stack1 == null || stack1 === false ? stack1 : stack1.distance)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " miles</span><br>\n  ";
  return buffer;
  }

  buffer += "<a class=\"button tiny secondary useThisToSearch column\" href=\"javascript: void(0)\" data-id=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.model),stack1 == null || stack1 === false ? stack1 : stack1.cid)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n  ";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.data),stack1 == null || stack1 === false ? stack1 : stack1.jobTitle)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n  ";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.data),stack1 == null || stack1 === false ? stack1 : stack1.company)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n  ";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.data),stack1 == null || stack1 === false ? stack1 : stack1.jobLocation)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n  ";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.data),stack1 == null || stack1 === false ? stack1 : stack1.jobKeywords)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n  ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.data),stack1 == null || stack1 === false ? stack1 : stack1.distance), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n  <span>Salary: "
    + escapeExpression(((stack1 = ((stack1 = depth0.data),stack1 == null || stack1 === false ? stack1 : stack1.minSalary)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-"
    + escapeExpression(((stack1 = ((stack1 = depth0.data),stack1 == null || stack1 === false ? stack1 : stack1.maxSalary)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n</a>\n\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/searchResults.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<p><strong>";
  if (stack1 = helpers.jobCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.jobCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " results for \"";
  if (stack1 = helpers.jobTitle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.jobTitle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"</strong></p>\n"
    + "\n<div class=\"right\">\n  Rank:\n  <a class=\"sortAsc button tiny\" href=\"javascript:;\">Up</a> |\n  <a class=\"sortDesc button tiny\" href=\"javascript:;\">Down</a>\n</div>\n\n\n<div class=\"jobResults\">\n  <div class=\"loader\"></div>\n</div>";
  return buffer;
  });

this["JST"]["app/scripts/templates/searchResultsItem.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      ";
  if (stack1 = helpers.city) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.city; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ",\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var stack1;
  if (stack1 = helpers.pCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  return escapeExpression(stack1);
  }

function program5(depth0,data) {
  
  
  return "0";
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
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.toDoubleDigits || depth0.toDoubleDigits),stack1 ? stack1.call(depth0, depth0.pScore, options) : helperMissing.call(depth0, "toDoubleDigits", depth0.pScore, options)))
    + "</li>\n  <li class=\"location\">\n    ";
  stack2 = helpers['if'].call(depth0, depth0.city, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    ";
  if (stack2 = helpers.state) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.state; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\n  </li>\n</ul>\n<ul class=\"small-2 columns\">\n  <li><a class=\"right showConnectButton\" href=\"javascript:;\">\n    ";
  stack2 = helpers['if'].call(depth0, depth0.pCount, {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n  </a></li>\n  "
    + "\n</ul>\n";
  return buffer;
  });

this["JST"]["app/scripts/templates/user.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  <a class=\"logout\" href=\"/logout\">Log out</a>\n  ";
  stack1 = helpers['if'].call(depth0, depth0.pictureUrl, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <img title=\"";
  if (stack1 = helpers.firstName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.firstName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.lastName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lastName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"topbar-photo\" src=\"";
  if (stack1 = helpers.pictureUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pictureUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n  ";
  return buffer;
  }

function program4(depth0,data) {
  
  
  return "\n  <a href=\"/auth/linkedin\">Log in</a></li>\n";
  }

  stack1 = helpers['if'].call(depth0, depth0.id, {hash:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });