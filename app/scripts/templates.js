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

this["JST"]["app/scripts/templates/home.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\">\n  <div class=\"small-10 large-centered columns\">\n    <div class=\"row collapse\">\n      <h1>Pre-Linked</h1>\n      <div class=\"small-5 columns\">\n        <label>Job</label>\n        <input type=\"text\" placeholder=\"Example: Software Engineer\">\n      </div>\n      <div class=\"small-5 columns\">\n        <label>Location</label>\n        <input type=\"text\" placeholder=\"Example: San Francisco, CA\">\n      </div>\n      <div class=\"small-2 columns\">\n        &nbsp;\n        <a href=\"#\" class=\"button prefix\">Search</a>\n      </div>\n    </div>\n  </div>\n</div>";
  });

this["JST"]["app/scripts/templates/page.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<p>Your content here.</p>\n\n";
  });

this["JST"]["app/scripts/templates/search.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<p>Your content here.</p>\n\n";
  });