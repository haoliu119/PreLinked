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