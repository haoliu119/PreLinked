Handlebars.registerHelper('toDoubleDigits', function(input){
  return parseFloat(input).toFixed(2);
});