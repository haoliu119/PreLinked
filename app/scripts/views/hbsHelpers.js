Handlebars.registerHelper('toDoubleDigits', function(input){
  return parseFloat(input).toFixed(2);
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