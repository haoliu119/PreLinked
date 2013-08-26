Handlebars.registerHelper('toDoubleDigits', function(input){
  return parseFloat(input).toFixed(2);
});

Handlebars.registerHelper('ifCond', function(v1, v2, options) {
  if(v1 === v2) {
    return options.fn(this);
  }
  return options.inverse(this);
});