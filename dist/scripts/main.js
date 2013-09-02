/*global PreLinked, $, Backbone*/

window.PreLinked = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    console.log('Hello from PreLinked!');
    _.extend(PreLinked, Backbone.Events);

    PreLinked.jobQuery = new this.Models.AppModel();
    var app_view = new this.Views.AppView({
      model: PreLinked.jobQuery
    });
  }
};

$(document).ready(function () {
  PreLinked.init();
  $(document).foundation();
});

this["JST"] = this["JST"] || {};

this["JST"]["app/scripts/templates/app.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"notification\" style=\"display:none\">\n  <div class=\"message\"></div>\n  <a class=\"close-notification\" href=\"javascript:;\">&times;</a>\n</div>\n<div class=\"page\">\n  <div class=\"header\">\n    <header>\n      <div class=\"logo-row row\">\n        <div class=\"large-centered columns\">\n          <div class=\"row\">\n            <div class=\"large-8 small-8 columns\">\n                <a href=\"/#home\"><img class=\"logo\" src=\"https://webfiles.uci.edu/shaohuaz/share/prelinked/prelinked.png\" alt=\"PreLinked\"></a>\n              </div>\n            <div id=\"user-view\" class=\"large-4 small-4 columns\"></div>\n          </div>\n        </div>\n      </div>\n    </header>\n  </div>\n\n  <div class=\"show-for-small row\">\n    <a id=\"tab-search\" data-tab=\"search\" class=\"arrow_box small-4 columns tab\" href=\"javascript:;\">Search Filters</a>\n    <a id=\"tab-jobs\" data-tab=\"jobs\" class=\"arrow_box small-4 columns tab\" href=\"javascript:;\">Job Results</a>\n    <a id=\"tab-network\" data-tab=\"network\" class=\"arrow_box small-4 columns tab\" href=\"javascript:;\">Network</a>\n  </div>\n\n  <div id=\"main\">\n    <div class=\"loader\"></div>\n  </div>\n</div><!-- .page -->\n\n<div class=\"footer\">\n  <footer>\n    <div class=\"row\">\n      <div class=\"large-centered columns\">\n        <div class=\"row collapse\">\n          <div id=\"footer\">\n            <div class=\"left col\">\n              <strong>&copy; PreLinked, 2013</strong>\n            </div>\n            <div class=\"left col\">\n              <div><strong>Powered By:</strong></div>\n              <a href=\"http://www.linkedin.com\" target=\"_blank\"><i class=\"icon-linkedin\"></i></a> +\n              <a href=\"http://www.indeed.com\" target=\"_blank\"><i class=\"icon-indeed\"></i></a>\n            </div>\n            <div class=\"left col\">\n              <div><strong>Made At:</strong></div>\n              <a href=\"http://hackreactor.com\" target=\"_blank\"><i class=\"icon-hackreactor\"></i></a>\n            </div>\n            <div class=\"left col\">\n              <div><strong>Hire Us:</strong></div>\n              <a href=\"http://about.me/haoliu\" target=\"_blank\">Hao Liu</a><br>\n              <a href=\"http://getshao.com/\" target=\"_blank\">ShaoHua Zhou</a><br>\n              <a href=\"http://about.me/sportanova/\" target=\"_blank\">Stephen Portanova</a><br>\n              <a href=\"http://barrymwong.com/\" target=\"_blank\">Barry Wong</a>\n            </div>\n            <div class=\"left col\">\n              <div><strong>Fork Me!</strong></div>\n              <a href=\"https://github.com/haoliu119/prelinked\" target=\"_blank\"><i class=\"icon-github\"></i></a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>\n</div><!-- .footer -->\n<script type=\"text/javascript\">\n  analytics.identify('demo_user', {\n    email : 'demo@prelinked.com'\n  });\n</script>";
  });

this["JST"]["app/scripts/templates/connections.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "\n  <p class=\"allResults left\"><strong>";
  if (stack1 = helpers.number_of_connections) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.number_of_connections; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " related connections</strong></p>\n  <div class=\"sorting right\">\n    Connections:\n    <a id=\"all-connections\" href=\"javascript:;\">All</a>\n  </div>\n\n  <div id=\"login-box\" class=\"clearfix\">\n    <div class=\"loader\"></div>\n  </div>\n\n  <div id=\"connection-results\" class=\"scroll\">\n    <div class=\"loader\"></div>\n  </div>\n\n";
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
  buffer += "\n    </div>\n  </a>\n  <div class=\"info\">\n    <h2 class=\"name\">\n      <a class=\"modal-details\" href=\"#\" data-in-id=\"";
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
  buffer += "</a>\n      <div class=\"numberOfConnections\">";
  if (stack2 = helpers.numConnections) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.numConnections; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</div>\n\n    </h2>\n    <ul>\n      <li class=\"headline\">";
  if (stack2 = helpers.headline) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.headline; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</li>\n      <li class=\"connectionLocation\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.location),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n    </ul>\n  </div>\n</div>";
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

  buffer += "<div>\n  <p>\n    <label>\n      <strong><a href=\"#\" data-dropdown=\"drop2\" id=\"jobLocation\">";
  if (stack1 = helpers.jobLocation) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.jobLocation; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></strong>\n      <a href=\"#\" class=\"geoLocation\"><img src=\"https://webfiles.uci.edu/shaohuaz/share/prelinked/geolocate.png\" height=\"20\" width=\"20\"></a>\n    </label>\n  </p>\n\n</div>\n<form id=\"form-location-search\">\n  <ul id=\"drop2\" class=\"f-dropdown medium\" data-dropdown-content>\n    <li>\n      <div>\n        <input class=\"full-width\" name=\"job-location\" type=\"text\" placeholder=\"Location: city, state, or zip\">\n      </div>\n      <div>\n        <button type=\"submit\" class=\"button prefix\">Update</button>\n      </div>\n    </li>\n  </ul>\n</form>\n\n<form id=\"form-search\">\n  <label>Job Title</label>\n  <div class=\"inputFilter\">\n    <input class=\"searchInput\" id=\"jobTitleSearchInput\" name=\"job-title\" type=\"text\" placeholder=\"Example: Engineer\">\n    <button class=\"addFilterButton tiny\" data-id=\"jobTitle\">Add</button>\n  <div>\n  <div>\n    ";
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


  buffer += "<p class=\"left\"><strong>";
  if (stack1 = helpers.jobCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.jobCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " results for \"";
  if (stack1 = helpers.jobTitle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.jobTitle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"</strong></p>\n<div class=\"sorting right\">\n  Rank:\n  <a class=\"sortAsc\" href=\"javascript:;\">Up</a> |\n  <a class=\"sortDesc\" href=\"javascript:;\">Down</a>\n</div>\n\n<div class=\"jobResults clearfix\">\n  <div class=\"loader\"></div>\n</div>";
  return buffer;
  });

this["JST"]["app/scripts/templates/searchResultsItem.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          ";
  if (stack1 = helpers.city) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.city; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ",\n        ";
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

  buffer += "<div class=\"row collapse\">\n  <h2 class=\"title twelve columns\">\n    <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\">";
  if (stack1 = helpers.jobtitle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.jobtitle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n  </h2>\n</div>\n<div class=\"row collapse\">\n  <div class=\"small-10 columns\">\n    <ul class=\"info\">\n      <li class=\"company\">";
  if (stack1 = helpers.company) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.company; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.toDoubleDigits || depth0.toDoubleDigits),stack1 ? stack1.call(depth0, depth0.pScore, options) : helperMissing.call(depth0, "toDoubleDigits", depth0.pScore, options)))
    + "</li>\n      <li class=\"location\">\n        ";
  stack2 = helpers['if'].call(depth0, depth0.city, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        ";
  if (stack2 = helpers.state) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.state; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\n      </li>\n    </ul>\n  </div>\n  <div class=\"small-2 columns\">\n    <a class=\"right showConnectButton\" href=\"javascript:;\">\n      ";
  stack2 = helpers['if'].call(depth0, depth0.pCount, {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    </a>\n  </div>\n</div>\n\n";
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
/*global PreLinked, Backbone*/

PreLinked.Models.AppModel = Backbone.Model.extend({

  // NOTE: DO NOT CHANGE ATTRIBUTE NAMES, USED TO MAP TO API QUERY
  defaults:{
    jobTitle:     [],
    company:      [],
    jobLocation:  "Mountain View, CA",
    jobKeywords:  [],
    distance:     "25",
    minSalary:    "None",
    maxSalary:    "None"
  },

  initialize: function (){
    this.app_title = 'PreLinked App';
    this.googleAPIurl = "https://maps.googleapis.com/maps/api/geocode/json"

    // TODO: DELETE BEFORE DEPLOYMENT
    this.on('change', this.consoleLogJobQuery);
    // ------------------------------
  },

  getGoogleGeo: function(latlng){
    var that = this;
    $.ajax({
      type: "GET",
      url: this.googleAPIurl,
      data: {
        sensor: true,
        latlng: latlng
      },
      success: function(response){
        var response = response.results[0];
        if (response !== undefined){
          var location = [];
          _.each(response.address_components, function(component){
            if(component.types.indexOf('locality') >= 0){
              location.unshift(component.long_name);
            }else if(component.types.indexOf('administrative_area_level_1') >= 0){
              location.push(component.short_name);
            }
          });
          location = location.join(', ');
          // console.log(location);
          that.set('jobLocation', location);
          that.trigger('googleGeoSuccess');
        }else{
          that.trigger('googleGeoError');
        }
      },
      error:function(error){
        that.trigger('googleGeoError');
      },
    });
  },

  isDuplicateFilter: function(filterType, filterWord) {
    var filterArray = this.attributes[filterType];
    var filterWord = filterWord.toLowerCase();
    return _.contains(filterArray, filterWord);
  },

  // TODO: DELETE BEFORE DEPLOYMENT ==============================
  consoleLogJobQuery: function(){
    console.log('APP MODEL changed =====================');
    console.log('jobTitle: ',    this.get('jobTitle'));
    console.log('company: ',     this.get('company'));
    console.log('jobLocation: ', this.get('jobLocation'));
    console.log('jobKeywords: ', this.get('jobKeywords'));
    console.log('distance: ',    this.get('distance'));
    console.log('minSalary: ',   this.get('minSalary'));
    console.log('maxSalary: ',   this.get('maxSalary'));
    console.log('========================================');
  }
  // ========================================================================
});
/*global PreLinked, Backbone*/
PreLinked.Models.SearchModel = Backbone.Model.extend({
  // this model will contain jobsSorted result from our server
  url: '/jobs/search'
});

/*global PreLinked, Backbone*/

PreLinked.Models.HomeModel = Backbone.Model.extend({});

/*global PreLinked, Backbone*/

PreLinked.Models.PageModel = Backbone.Model.extend({});

/*global PreLinked, Backbone*/

PreLinked.Models.SearchResultsItemModel = Backbone.Model.extend({

  showConnections: function(){
    this.trigger('showConnections', this.attributes);
  }

});

/*global PreLinked, Backbone*/

PreLinked.Models.SearchfilterModel = Backbone.Model.extend({

  initialize: function() {
    this.jobQuery = PreLinked.jobQuery;
    this.regexTrimHeadTailSpace = /^[ \t]+|[ \t]+$/;
  },

  splitFilter: function(word) {
    if(_.contains(word, '_')) {
      word = word.replace('_',' ');
      return this.splitFilter(word);
    } else {
      return word;
    }
  },

  addSearchFilter: function(title, company, keywords, distance, minSalary, maxSalary) {
    var temp = [];
    if(title && !this.jobQuery.isDuplicateFilter('jobTitle', title)) {
      title = title.replace(this.regexTrimHeadTailSpace, "");
      temp = this.jobQuery.attributes.jobTitle.slice();
      temp.push(title);
      this.jobQuery.set('jobTitle', temp);
    }
    if(company && !this.jobQuery.isDuplicateFilter('company', company)) {
      company = company.replace(this.regexTrimHeadTailSpace, "");
      temp = this.jobQuery.attributes.company.slice();
      temp.push(company);
      this.jobQuery.set('company', temp);
    }
    if(keywords && !this.jobQuery.isDuplicateFilter('jobKeywords', keywords)) {
      keywords = keywords.replace(this.regexTrimHeadTailSpace, "");
      temp = this.jobQuery.attributes.jobKeywords.slice();
      temp.push(keywords);
      this.jobQuery.set('jobKeywords', temp);
    }
    if(distance !== this.jobQuery.attributes.distance){
      this.jobQuery.set('distance', distance);
    }
    if(minSalary !== this.jobQuery.attributes.minSalary) {
      this.jobQuery.set('minSalary', minSalary);
    }
    if(maxSalary !== this.jobQuery.attributes.maxSalary) {
      this.jobQuery.set('maxSalary', maxSalary);
    }
  },

  removeSearchFilter: function(e) {
    var filterType = e.target.className.split(' ')[1];
    var elToRemove = this.splitFilter(e.target.className.split(' ')[2]);
    var indexToRemove = 0;
    if(filterType === 'removeJobTitleFilter') {
      var jobTitleArray = this.jobQuery.get('jobTitle').slice();
      indexToRemove = _.indexOf(jobTitleArray, elToRemove);
      jobTitleArray.splice(indexToRemove, 1);
      this.jobQuery.set('jobTitle', jobTitleArray);
    } else if(filterType === 'removeCompanyFilter') {
      var companyArray = this.jobQuery.get('company').slice();
      indexToRemove = _.indexOf(companyArray, elToRemove);
      companyArray.splice(indexToRemove, 1);
      this.jobQuery.set('company', companyArray);
    } else if(filterType === 'removeJobLocationFilter') {
      this.jobQuery.set('jobLocation', '');
    } else if(filterType === 'removeJobKeywordsFilter') {
      var jobKeywordsArray = this.jobQuery.get('jobKeywords').slice();
      indexToRemove = _.indexOf(jobKeywordsArray, elToRemove);
      jobKeywordsArray.splice(indexToRemove, 1);
      this.jobQuery.set('jobKeywords', jobKeywordsArray);
    }
  }
});

/*global PreLinked, Backbone*/

PreLinked.Models.ConnectionModel = Backbone.Model.extend({
});

/*global PreLinked, Backbone*/

PreLinked.Models.ModalconnectiondetailsModel = Backbone.Model.extend({
  urlRoot: '/people/',

  initialize: function (options) {
    // if(options && options.id){
    //   this.url = this.url + options.id;
    // }
  }
});

/*global PreLinked, Backbone*/

PreLinked.Models.UserModel = Backbone.Model.extend({
  urlRoot: '/persons',

  defaults: {
    searchHistory: []
    // inPerson: {}
  },

  initialize: function() {
    this.jobQuery = PreLinked.jobQuery;
  }
});

/*global PreLinked, Backbone*/

PreLinked.Models.SearchrecentModel = Backbone.Model.extend({

});

/*global PreLinked, Backbone*/

PreLinked.Collections.SearchResultsCollection = Backbone.Collection.extend({

    model: PreLinked.Models.SearchResultsItemModel,

    url: '/jobs/search',

    comparator: function (model) {
      return -1 * parseFloat( model.get('pScore') );
    }
});

/*global PreLinked, Backbone*/

PreLinked.Collections.PagesCollection = Backbone.Collection.extend({

    model: PreLinked.Models.PageModel

});

/*global PreLinked, Backbone*/

PreLinked.Collections.ConnectionsCollection = Backbone.Collection.extend({

    model: PreLinked.Models.ConnectionModel,

    // by default, connections will show you first degrees
    url: '/people'

});
/*global PreLinked, Backbone*/

PreLinked.Collections.SearchrecentCollection = Backbone.Collection.extend({

    model: PreLinked.Models.SearchrecentModel,

    url: '/persons/searchRecent'
});

Handlebars.registerHelper('toDoubleDigits', function(input){
  var output = parseFloat(input).toFixed(2);
  return (_(output).isNumber() ) ? output : '';
});

Handlebars.registerHelper('ifCond', function(v1, v2, options) {
  if(v1 === v2) {
    return options.fn(this);
  }
  return options.inverse(this);
});

Handlebars.registerHelper('checkDegree', function(degree, options) {
  if(degree === 1) {
    return degree + 'st';
  } else if(degree === 2) {
    return degree + 'nd';
  } else if(degree === 3) {
    return degree + 'rd';
  }
  return options.inverse(this);
});

Handlebars.registerHelper('truncateName', function(name, options) {
  var firstCharOfName = name.substr(0,1) + '.';
  return firstCharOfName;
});

Handlebars.registerHelper('concatWord', function(string, options) {
  var splitWord = string.split(' ');
  if(splitWord.length > 1) {
    var splitWord1 = splitWord.splice(0,1);
    return _.reduce(splitWord, function(memo, string) {
      return memo + '_' + string;
    }, splitWord1);
  } else {
    return string;
  }
});
/*global PreLinked, Backbone, JST*/

PreLinked.Views.PageView = Backbone.View.extend({
  //template: JST['app/scripts/templates/page.ejs']
  render: function() {
  	this.$el.append();
    this.delegateEvents();
  }
});

/*global PreLinked, Backbone, JST*/

PreLinked.Views.HomeView = Backbone.View.extend({
  id: 'page-home',
  className: 'page',

  template: JST['app/scripts/templates/home.hbs'],

  events: {
    'submit form#form-home': 'submitSearch',
    'submit form#form-location': 'updateLocation',
    'click a#jobLocation' : 'locationOnFocus'
  },

  initialize: function() {
    this.jobQuery = PreLinked.jobQuery;
    this.jobQuery.on('change:jobLocation', this.renderLocation, this);
  },

  submitSearch: function(e) {
    e.preventDefault();
    e.stopPropagation();
    var jobTitle = this.$el.find('input[name=job-title]').val();
    if (jobTitle !== "" && !this.jobQuery.isDuplicateFilter('jobTitle', jobTitle)){
      var titles = this.jobQuery.get("jobTitle").slice();
      titles.push(jobTitle);
      this.jobQuery.set("jobTitle", titles);
    }

    //null is used to signify that this is NOT a click event
    this.trigger('homeSearchSubmit', null, {showTab: 'jobs'});

    analytics.track('Searched on homepage', {
      jobTitle    : this.jobQuery.attributes.jobTitle,
      jobLocation : this.jobQuery.attributes.jobLocation
    });

    PreLinked.appRouter.navigate('/search', { trigger: true});
  },

  render: function() {
    this.$el
      .attr('data-page','home')
      .html(this.template(this.jobQuery.attributes));
    this.delegateEvents();
    return this;
  },

  updateLocation: function(e){
    e.preventDefault();
    var jobLocation = this.$el.find('input[name=job-location]').val();
    if (jobLocation !== ""){
      this.$el.find('input[name=job-location]').val('');
      this.$el.find('a#jobLocation').trigger('click');
      this.jobQuery.set('jobLocation', jobLocation);
    }
  },

  renderLocation: function(){
    this.$el.find('#jobLocation').text(this.jobQuery.attributes.jobLocation);
  },

  locationOnFocus: function(e){
    e.preventDefault();
    this.$el.find('input[name=job-location]').focus();
  }

});

/*global PreLinked, Backbone, JST*/

PreLinked.Views.AppView = Backbone.View.extend({
  el: $('#app'),

  template: JST['app/scripts/templates/app.hbs'],

  events:{
    "click .geoLocation" : "getLocation",
    'click .tab': 'selectTab',
    'submit form#form-home': 'submitSearch',
    'click .close-notification': 'closeNotification'
  },

  imageUrls:{
    loading:    "https://webfiles.uci.edu/shaohuaz/share/prelinked/loader.gif",
    geoLocate:  "https://webfiles.uci.edu/shaohuaz/share/prelinked/geolocate.png"
  },

  initialize: function() {
    this.jobQuery = PreLinked.jobQuery; //the same as this.model

    _.bindAll(this, "showPosition");
    _.bindAll(this, "showError");
    var that = this;

    this.userModel  = new PreLinked.Models.UserModel();
    this.userView   = new PreLinked.Views.UserView({model: this.userModel});

    this.model.on('googleGeoSuccess',function(){
      this.setIconGeo();
    }, this);
    this.model.on('googleGeoError',function(){
      this.setIconGeo();
      alert("Location information is unavailable.");
    }, this);

    this.searchView = new PreLinked.Views.SearchView({
      model: new PreLinked.Models.SearchModel()
    });

    this.searchView.on('addSearchHistory', function(){
      that.userView.addSearchHistory();
      //immediate local rendering with local data which is not completely in sync with the server
      that.searchView.renderSearchRecentBasedOnFrontendData(that.userModel.get('searchHistory'));
      //rendering the real data after the userModel has been updated
      that.searchView.listenTo( that.userModel, 'sync',  that.searchView.renderSearchRecent);
      //rendering the real data even if the sync with userModel failed
      that.searchView.listenTo( that.userModel, 'error',  that.searchView.renderSearchRecent);
    }, this);

    this.homeView = new PreLinked.Views.HomeView({
      model: new PreLinked.Models.HomeModel()
    });

    this.homeView.on('homeSearchSubmit', this.selectTab, this);
    this.searchView.on('homeSearchSubmit', this.selectTab, this);
    PreLinked.on('homeSearchSubmit', this.selectTab, this);

    this.render();

    PreLinked.appRouter = new PreLinked.Routers.AppRouter();
    PreLinked.appRouter.on('route:home', this.homePage, this);
    PreLinked.appRouter.on('route:search', this.searchPage, this);

    Backbone.history.start({
      pushState: false,
      root: '/',
      silent: true
    });
    Backbone.history.loadUrl();
    // var that = this;
    // $(window).on('scroll', function() {
    //   that.fixedScroll();
    // });
  },

  closeNotification: function() {
    this.$el.find('#notification').hide();
  },

  selectTab: function(e, data) {
    if(data){
      var tab = '#tab-' + data.showTab;
      var dataAttr = data.showTab;
    } else {
      e.preventDefault();
      var tab = e.target;
      var dataAttr = $(tab).data('tab');
    }

    PreLinked.appRouter.navigate('/search', { trigger: true});

    this.$el.find('.tab').removeClass('on');
    this.$el.find('.search-col').removeClass('on');
    $(tab).addClass('on');
    this.$el.find('#column-' + dataAttr).addClass('on');
    window.scrollTo(0,1);
  },

  homePage: function(){
    this.$el.find('#main').html(this.homeView.render().el);
    // this.homeView.delegateEvents();
    this.$el.find('#main input[name=job-title]').focus();
    this.getLocation();
  },

  searchPage: function(){
    //this.userView.model.fetchUser();
    this.$el.find('#main').html(this.searchView.render().el);
    // this.searchView.delegateEvents();
  },

  render: function() {
    // render header, footer, other page-common components
    this.$el.html(this.template(this.model.attributes));
    this.$el.find('#user-view').html(this.userView.render().el);
    this.delegateEvents();
    return this;
  },

  getLocation: function(event){
    if (event){
      event.preventDefault();
    }
    if(navigator.geolocation){
      this.setIconLoading();
      navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
    }else{
      alert("Sorry, this feature is not supported by your browser.");
    }
  },

  setIconLoading: function(){
    this.$el.find('#main .geoLocation img').attr('src', this.imageUrls.loading);
  },

  setIconGeo: function(){
    this.$el.find('#main .geoLocation img').attr('src', this.imageUrls.geoLocate);
  },

  showPosition: function(position){
    var latlng = position.coords.latitude+","+position.coords.longitude;
    this.model.getGoogleGeo(latlng);
  },

  showError: function(error){
    switch(error.code)
      {
      case error.PERMISSION_DENIED:
        console.log("User denied the request for Geolocation.");
        this.$el.find('#notification').show();
        this.$el.find('#notification .message').html("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        this.$el.find('#notification').show();
        this.$el.find('#notification .message').html("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        this.$el.find('#notification').show();
        this.$el.find('#notification .message').html("Request timed out, try again.");

        break;
      case error.UNKNOWN_ERROR:
        this.$el.find('#notification').show();
        this.$el.find('#notification .message').html("An unknown error occurred.");

        break;
      }
    this.setIconGeo();
  },



  // submitSearch: function(event){
  //   event.preventDefault();
  //   event.stopPropagation();
  //   this.homeView.submitSearch(event);
  //   return false;
  // }





  // fixedScroll: function() {
  //   var reset = function() {
  //     $('#connections').removeClass('scroll').css({
  //       marginTop: '',
  //       maxHeight: ''
  //     });
  //     $('#search-filters').css('margin-top', '');
  //   };

  //   if( $(window).width() < 768) {
  //     reset();
  //     return;
  //   }

  //   var viewportHt = $(window).height(),
  //       top = $(window).scrollTop(),
  //       connHt = $('#connections').height(),
  //       resultsHt = $('#job-results').height(),
  //       filterHt = $('#search-filters').height(),
  //       htResCheck = resultsHt > viewportHt;

  //   if(top > 150) {
  //     htResCheck && $('#connections').addClass('scroll').css({
  //       marginTop: (top > resultsHt-viewportHt ? resultsHt-viewportHt : top) - 130,
  //       maxHeight: viewportHt - 20
  //     });
  //     $('#search-filters').css('margin-top', top - 130);
  //   } else {
  //     reset();
  //   }
  // }
});

/*global PreLinked, Backbone, JST*/

PreLinked.Views.UserView = Backbone.View.extend({
  tagName: 'ul',
  className: 'right',

  template: JST['app/scripts/templates/user.hbs'],

  initialize: function(){
    _.bindAll(this, 'render');
    this.fetchUser()
      .done( this.render );
  },

  fetchUser: function(){
    var deferred = $.Deferred();
    var that = this;
    this.model.fetch()
      .done(function(data){
        // console.log('user attributes: ', that.attributes);
        // console.log('fetchUser success with data: ', data);
        deferred.resolve(data);
      })
      .fail(function(error){
        console.log('fetchUser failed');
        deferred.reject('fetchUser failed');
      });
    return deferred.promise();
  },

  saveUser: function(){
    this.model
      .save()
      .done(function(model, response, options){
        console.log('success in saveUser()');
      })
      .fail(function(model, xhr, options){
        console.log('error in saveUser()');
      });
  },

  addSearchHistory: function(){
    var searchHistory = this.model.get('searchHistory');
    // console.log('adding SearchHistory, current history obj: ', searchHistory);
    searchHistory.unshift(_.clone(this.model.jobQuery.attributes));
    if(searchHistory.length > 10){
      this.model.set("searchHistory",_(searchHistory).first(10));
    }
    this.saveUser();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    this.delegateEvents();
    return this;
  }
});

/*global PreLinked, Backbone, JST*/

PreLinked.Views.SearchResultsView = Backbone.View.extend({

  template: JST['app/scripts/templates/searchResults.hbs'],

  initialize: function() {
    this.jobQuery = PreLinked.jobQuery;
    this.collection.on('reset', this.render, this);
  },

  events: {
    'click .sortAsc': 'sortCollectionAsc',
    'click .sortDesc': 'sortCollectionDesc'
  },

  sortCollectionAsc: function(events){
    events.preventDefault();
    this.collection.comparator = function (model) {
      return parseFloat( model.get('pScore') );
    };
    this.collection.sort();
    this.render();
  },

  sortCollectionDesc: function(events){
    events.preventDefault();
    this.collection.comparator = function (model) {
      return -1 * parseFloat( model.get('pScore') );
    };
    this.collection.sort();
    this.render();
  },

  render: function() {
    var titleString = this.titleString();
    this.$el.html(this.template(
      {jobCount: this.collection.length,
        jobTitle: titleString }
    ));

    if(this.collection.length){
      this.$el
        .find('.jobResults')
        .html(
          this.collection.map(function(item){
            return new PreLinked.Views.SearchResultsItemView({
              model: item
            }).render().el;
          })
        );
    } else{
      this.$el
        .find('.jobResults')
        .html("Sorry. I can't find anything for you.<br>"+
              "Do you want a bagel instead?<br><br>");
    }
    this.delegateEvents();
    return this;
  },

  titleString: function(){
    var string = "";
    var titles = this.jobQuery.attributes.jobTitle;

    for(var i = 0; i < titles.length; i++) {
      string += titles[i];
      if (i !== titles.length - 1 ){
        string += ", ";
      }
    }
    return string;
  }
});

/*global PreLinked, Backbone, JST*/

PreLinked.Views.SearchResultsItemView = Backbone.View.extend({

  className: 'job',

  template: JST['app/scripts/templates/searchResultsItem.hbs'],

  events: {
    'click .showConnectButton': 'showConnect'
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    this.delegateEvents();
    return this;
  },

  showConnect: function(e) {
    e.preventDefault();
    PreLinked.trigger('homeSearchSubmit', null, {showTab: 'network'});
    this.model.showConnections();
  }

});

/*global PreLinked, Backbone, JST*/

PreLinked.Views.SearchfilterView = Backbone.View.extend({

  template: JST['app/scripts/templates/searchFilter.hbs'],

  initialize: function() {
    this.jobQuery = PreLinked.jobQuery;
    this.jobQuery.on('change', this.render, this);
    this.regexTrimHeadTailSpace = /^[ \t]+|[ \t]+$/;
  },

  events: {
    'submit form#form-search':      'addSearchFilter',
    'click .addFilterButton':       'addSearchFilter',
    'mouseup .distanceRangeSlider': 'addSearchFilter',
    'change select':                'addSearchFilter',
    'click .removeFilter':          'removeSearchFilter',
    'submit #form-location-search': 'updateLocation',
    'click a#jobLocation':          'locationOnFocus'
  },

  addSearchFilter: function(e) {
    if(e.target.className !== 'distanceRangeSlider'){ // otherwise mouseup won't release mouse
      e.preventDefault();
    }
    console.log('addSearchFilter >>>>>>');
    var jobTitle =    this.$el.find('input[name="job-title"]')[0].value;
    var company =     this.$el.find('input[name="company"]')[0].value;
    var jobKeywords = this.$el.find('input[name="job-keywords"]')[0].value;
    var distance =    this.$el.find('input[name="distance"]')[0].value;
    var minSalary =   this.$el.find('#minSalary')[0].value;
    var maxSalary =   this.$el.find('#maxSalary')[0].value;

    this.model.addSearchFilter(jobTitle, company, jobKeywords, distance, minSalary, maxSalary);
  },

  removeSearchFilter: function(e) {
    e.preventDefault();
    this.model.removeSearchFilter(e);
  },

  render: function () {
    console.log('searchFilter View .render()');
    var obj = _.clone(this.jobQuery.attributes);
    _(obj).extend({
      salaryList: ["None", "40", "60", "80", "100", "120"]
    });
    this.$el.html( this.template(obj) );
    this.$el.find('#minSalary').find("[data-id='" + this.jobQuery.attributes.minSalary + "']").attr('selected','selected');
    this.$el.find('#maxSalary').find("[data-id='" + this.jobQuery.attributes.maxSalary + "']").attr('selected','selected');
    this.delegateEvents();
    return this;
  },

  updateLocation: function(e){
    e.preventDefault();
    var jobLocation = this.$el.find('input[name=job-location]').val();
    jobLocation = jobLocation.replace(this.regexTrimHeadTailSpace, "");
    if (jobLocation !== ""){
      this.$el.find('#jobLocation').trigger('click');
      this.$el.find('input[name=job-location]').val('');
      this.jobQuery.set('jobLocation', jobLocation);
    }
  },

  locationOnFocus: function(e){
    e.preventDefault();
    this.$el.find('input[name=job-location]').focus();
  }
});
/*global PreLinked, Backbone, JST*/

PreLinked.Views.SearchrecentitemView = Backbone.View.extend({

  template: JST['app/scripts/templates/searchRecentItem.hbs'],

  initialize: function(){
    this.jobQuery = PreLinked.jobQuery;
  },

  render: function() {
    var data = this.model.attributes || this.model ;
    this.$el.append( this.template({data: data, model: this.model}) );
    this.delegateEvents();
    return this;
  }

});

/*global PreLinked, Backbone, JST*/

PreLinked.Views.SearchrecentView = Backbone.View.extend({

  template: JST['app/scripts/templates/searchRecent.hbs'],

  events: {
    'click .useThisToSearch'  : 'useSeachHistoryToSearch'
  },

  initialize: function(){
    this.jobQuery = PreLinked.jobQuery;
  },

  useSeachHistoryToSearch: function(event){
    event.preventDefault();
    var target = $(event.target).closest('a');
    var id = target.data('id');
    this.jobQuery.set(_.clone(this.collection.get(id).attributes));
  },

  render: function() {
    this.$el.html(this.template());
    //render a placeholder first

    // console.log('searchRecent collection length: ', this.collection.length);
    this.$el
      .find('#search-recent-details')
      .html(
        this.collection.map(function(item) {
          return new PreLinked.Views.SearchrecentitemView({
            model: item
          }).render().el;
        })
      );
    this.delegateEvents();
    return this;
  },

});

/*global PreLinked, Backbone, JST*/

PreLinked.Views.SearchView = Backbone.View.extend({

  id: 'page-search',
  className: 'page',

  template: JST['app/scripts/templates/search.hbs'],

  events: {
    'click .searchFilterButton': 'confirmSubmit'
  },

  initialize: function(){
    this.jobQuery = PreLinked.jobQuery;

    this.searchFilterView   = new PreLinked.Views.SearchfilterView({
      model     : new PreLinked.Models.SearchfilterModel()
    });

    this.searchRecentView   = new PreLinked.Views.SearchrecentView({
      collection: new PreLinked.Collections.SearchrecentCollection()
    });

    this.searchResultsView  = new PreLinked.Views.SearchResultsView({
      collection: new PreLinked.Collections.SearchResultsCollection()
    });

    this.connectionsView    = new PreLinked.Views.ConnectionView({
      collection: new PreLinked.Collections.ConnectionsCollection()
    });

    this.searchResultsView.collection.on('showConnections', this.showConnections, this);
  },

  showConnections: function(jobAttributes){
    if(jobAttributes.pCount) {
      this.connectionsView.jobConnections.reset(jobAttributes.pConnections.slice(0,jobAttributes.pCount));
    }
  },

  confirmSubmit: function(e) {
    e.preventDefault();
    this.searchFilterView.addSearchFilter(e);
    if(this.jobQuery.hasChanged()){
      this.jobQuery.changed = {};
      this.submitSearch(false);
    }else{
      var answer = confirm("You haven't changed anything, search anyways?");
      if(answer){
        this.submitSearch(true);
      }
    }
  },

  submitSearch: function(duplicate){
    //null is used to signify that this is NOT a click event
    this.trigger('homeSearchSubmit', null, {showTab: 'jobs'});
    this.$el.find(".searchFilterButton").html("<div class='loader'></div>").attr('disabled','disabled');
    this.connectionsView.$el.append("<div class='white-wall'></div>");
    this.searchResultsView.$el.append("<div class='white-wall'></div>");
    var deferred = $.Deferred();
    var that = this;
    // TODO: FILTER OUT DUPLICATE JOB QUERIES IN SEARCH HISTORY
    if(!duplicate){
      this.trigger('addSearchHistory');
    }
    // ===============================
    this.model.fetch({data: this.jobQuery.attributes})
      .done(function(JC){
        if(JC.jobs){
          // render job results
          that.searchResultsView.collection.reset(JC.jobs);
          if(JC.connections){
            // render connections
            that.connectionsView.collection.reset(JC.connections);
            deferred.resolve();
          }else if (JC.connectionsError){
            var message = JC.connectionsError;
            if (message === 'Unable to verify access token' || message === '[unauthorized] Invalid or expired token.'){
              message = "your LinkedIn access expired, please logout and re-login.";
            }else{
              message = "we've reached your daily LinkedIn search limit, please try again after midnight UTC."
            }
            $('#notification').show();
            $('#notification .message').html("Sorry, " + message);
            deferred.reject();
          }else{
            deferred.resolve();
          }
        }else{ // JC.connections must be available, otherwise fetch would have failed
          // render connections
          that.connectionsView.collection.reset(JC.connections);
          deferred.resolve();
          $('#notification').show();
          $('#notification .message').html("Indeed didn't like us, we recorded the error.");
        }
      })
      .fail(function(errors){
        $('#notification').show();
        $('#notification .message').html("Strange, both Indeed and LinkedIn didn't like us, we recorded the errors.");
        deferred.reject();
      })
      .always(function(){
        // clear loading icons
        that.connectionsView.$el.find('.white-wall').remove();
        that.searchResultsView.$el.find('.white-wall').remove();
        that.$el.find(".searchFilterButton").html("Search").removeAttr('disabled');
      });
    return deferred.promise();
  },

  getFirstDegrees: function(){
    var deferred = $.Deferred();
    var that = this;
    this.connectionsView.collection.fetch()
      .fail(function(error){
        console.log("- getFirstDegrees error - ", error);
      })
      .always(function(){
        // clear loading icons
        deferred.resolve();
        console.log('- clear loading icons')
      });
    return deferred.promise();
  },

  getSearchRecent: function(){
    var deferred = $.Deferred();
    var that = this;
    this.searchRecentView.collection
      .fetch({
        success: function(data){
          // console.log('getSearchRecent', data);
          deferred.resolve(that.searchRecentView.render().el);

        },
        error: function(){
         deferred.reject(that.searchRecentView.render().el);
        }
      });
    return deferred.promise();
  },


  renderSearchFilter: function(){
    this.trigger('homeSearchSubmit', null, {showTab: 'search'});
    this.$el.find('#search-filters').html(this.searchFilterView.render().el);
  },

  renderSearchRecent: function(){
    var that = this;
    this.getSearchRecent()
      .done(function(element) {
        that.$el.find('#search-recent').html(element);
        that.searchRecentView.delegateEvents();
      })
      .fail(function(element) {
        that.$el.find('#search-recent').html(element);
        that.searchRecentView.delegateEvents();
      });
  },

  renderSearchRecentBasedOnFrontendData: function(frontendData){
    // console.log('Fake frontendData: ', frontendData);
    var localData = JSON.parse( JSON.stringify(frontendData) );
    _(localData).each(function(item){
      item.jobTitle = item.jobTitle.join(' ');
    });
    var searchRecentViewLocal   = new PreLinked.Views.SearchrecentView({
      collection: localData
    });
    this.$el.find('#search-recent').html(searchRecentViewLocal.render().el);
  },

  render: function() {
    var that = this;
    this.$el
      .attr('data-page','search')
      .html( this.template() );
    if(this.jobQuery.hasChanged() && this.jobQuery.attributes.jobTitle.length > 0 ){
      this.submitSearch()
        .done(function(){
          that.$el.find('#connections').html(that.connectionsView.render().el);
        })
        .fail(function(){
          that.getFirstDegrees().always(function(){
            that.$el.find('#connections').html(that.connectionsView.render().el);
          });
        })
        .always(function(){
          that.$el.find('#job-results').html(that.searchResultsView.render().el);
        });
    }else{
      this.$el.find('#job-results').html(that.searchResultsView.render().el);
      this.$el.find('#connections').html(that.connectionsView.render().el);
    }
    this.renderSearchFilter();
    this.renderSearchRecent();
    this.delegateEvents();
    return this;
  }

});

/*global PreLinked, Backbone, JST*/

PreLinked.Views.LoginboxView = Backbone.View.extend({

  template: JST['app/scripts/templates/loginBox.hbs'],

  initialize: function(){
    this.render();
  },

  events: {
    'click .in-login': 'showLoginProgress'
  },

  showLoginProgress: function(){

  },

  checkLogin: function(){
    var deferred = $.Deferred();
    $.ajax({
      type: "GET",
      url: "/session",
      contentType: "application/json; charset=utf-8",
      dataType: "json"
    }).done(function(data){
      deferred.resolve( JSON.parse(data) );
      //from string to boolean
    });
    return deferred.promise();
  },

  render: function(){

    var output = this.checkLogin();
    var that = this;
    output.done(function(data){
      that.$el.html(that.template({
        checkLogin: data
      }));
    });
    this.delegateEvents();
    return this;
  }

});

/*global PreLinked, Backbone, JST*/

PreLinked.Views.ModalconnectiondetailsView = Backbone.View.extend({

  template: JST['app/scripts/templates/modalConnectionDetails.hbs'],

  render: function(){
    this.$el.append( this.template(this.model));
    this.delegateEvents();
    return this;
  },

  getRelatedConnections: function(data){
      var deferred = $.Deferred();
    if(data.distance > 1) {
      console.log('get related connections called', data);
      console.log('relationship', data.relationToViewer.relatedConnections.values);
      var relationIDs = [];
      var relations = data.relationToViewer.relatedConnections.values;

      for(var i = 0; i < relations.length; i++) {
        relationIDs.push(relations[i].id);
      }
      console.log('relationIDs',relationIDs);

      $.ajax({
        type: 'GET',
        url: '/persons/related',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        data: {id: relationIDs},
        success: function(r) {
          console.log('success getRelatedConnections',r);
          deferred.resolve(r);
        },
        error: function(e) {
          console.log('some error in modalConnection',e);
          deferred.reject(e);
        }
      });
    }else{
      deferred.resolve([]);
    }
      return deferred.promise();
  }

});
/*global PreLinked, Backbone, JST*/

PreLinked.Views.ConnectionsitemView = Backbone.View.extend({

  template: JST['app/scripts/templates/connectionsItem.hbs'],

  initialize: function(){
  },

  events: {
    'click .modal-details': 'getModalConnectionDetails'
  },

  render: function() {
    this.$el.append(this.template(this.model.attributes));
    this.delegateEvents();
    return this;
  },

  getModalConnectionDetails: function(events){
    events.preventDefault();
    var $target = $(events.target);
    var in_id = $target.closest('a').data('in-id');

    var details = new PreLinked.Models.ModalconnectiondetailsModel({
      id: in_id
    });

    details.fetch()
      .done(function(data){

        var detailsView = new PreLinked.Views.ModalconnectiondetailsView({
          model: data
        });

        // detailsView.model.something = 'her';
        // console.log('details view', detailsView.model);

        detailsView.getRelatedConnections(data).done(function(result) {
          console.log('promise working?', result);
          detailsView.model.interConnections = result;
          console.log('interrelated connections', detailsView.model.interConnections);

          var modal = new Backbone.FoundationModal({
            content: detailsView,
            allowCancel: false,
            okText: 'Close'
          });
          modal.open();
          //open modal
          console.log(data);
        });
      });
  }

});

/*global PreLinked, Backbone, JST*/

PreLinked.Views.ConnectionView = Backbone.View.extend({

  template: JST['app/scripts/templates/connections.hbs'],

  events:{
    'click #all-connections' : 'renderAllResults'
  },

  renderAllResults: function(e){
    e.preventDefault();
    this.render();
  },

  initialize: function() {
    this.jobQuery = PreLinked.jobQuery;
    this.jobConnections = new PreLinked.Collections.ConnectionsCollection();
    this.loginBox = new PreLinked.Views.LoginboxView();
    this.collection.on('reset', this.render, this);
    this.jobConnections.on('reset', this.renderJobConnections, this);
  },

  render: function(){
    // console.log('ConnectionView.render()');
    // console.log('connections >>> ', this.collection.models);
    var that = this;
    this.$el.html(this.template({
      number_of_connections: this.collection.length
    }));

    this.$el
      .find('#login-box')
      .html(this.loginBox.render().el);

    if( this.collection.length ){ //if collection is NOT empty
      this.$el
        .find('#connection-results')
        .html(
          this.collection.map(function(item) {
            return new PreLinked.Views.ConnectionsitemView({
              model: item
            }).render().el;
          })
        );
    } else {
      this.checkLogin().done(function(message){
        that.$el
          .find('#connection-results')
          .html(message);
      });
    }
    this.delegateEvents();
    return this;
  },
  checkLogin: function(){
    var deferred = $.Deferred();
    $.ajax({
      type: "GET",
      url: "/session",
      contentType: "application/json; charset=utf-8",
      dataType: "json"
    }).done(function(data){
      data = JSON.parse(data);
      if(data){
        deferred.resolve("Sorry, I can't find any connection for you.<br>"+
              "How about submitting a job search...<br><br>");
      }else{
        deferred.resolve("Sorry, I can't find any connection for you.<br>"+
              "How about adding me as your connection...<br><br>");
      }
    });
    return deferred.promise();
  },
  renderJobConnections: function(){
    this.$el.html(this.template({
      number_of_connections: this.jobConnections.length
    }));

    this.$el
      .find('#login-box')
      .html(this.loginBox.render().el);

    if( this.jobConnections.length ){ //if jobConnections is NOT empty
      this.$el
        .find('#connection-results')
        .html(
          this.jobConnections.map(function(item) {
            return new PreLinked.Views.ConnectionsitemView({
              model: item
            }).render().el;
          })
        );
    } else {
      this.$el
        .find('#connection-results')
        .html("Sorry. I can't find any connection for you.<br>"+
              "How about adding me as your connection...<br><br>");
    }

    return this;
  }

});


PreLinked.Routers.AppRouter = Backbone.Router.extend({

  initialize: function(){
    //init user session etc.
  },

  routes: {
    '': 'home',
    'home': 'home',
    'search': 'search'
  },

  home: function() {
    // console.log('-router-home()');
    // this.navigate('/home', { trigger: true});
  },

  search: function() {
    // console.log('-router-search()');
    // this.navigate('/search', { trigger: true});
  }
});
