var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personSchema = new Schema({
  _id: { type: String, unique: true }, // use LinkedIn ID
  searchHistory: [Schema.Types.Mixed],
  inPerson:      Schema.Types.Mixed,
  firstDegree:   [String],
  secondDegree:  [String],
  thirdDegree:   [String]
},{
  collection: 'persons'
  //force collection to use this name
});

var persons = module.exports = mongoose.model('Person', personSchema);


// Update or Insert Single Person to DB
persons._upsert = function(inPerson){
  var deferred = Q.defer();
  inPerson = typeof(inPerson) === "string" ? JSON.parse(inPerson) : inPerson;
  persons.update({ _id: inPerson.id }, {inPerson: inPerson},{upsert: true}, function(err, data){
    if(err){
      console.log('- ERR, person not updated >> ', person.id, person.firstName);
      deferred.reject(err);
    }else{
      deferred.resolve(data);
    }
  });
  return deferred.promise;
};

// Update or Insert Array of Persons to DB
persons._bulkUpsert = function(personsArray){
  var deferred = Q.defer(),
      promises = [];

  personsArray = typeof(personsArray) === "string" ? JSON.parse(personsArray) : personsArray;
  _(personsArray).each(function(inPerson){
    promises.push( persons._upsert(inPerson) );
  });

  Q.all(promises)
    .then(
      function(persons){
        console.log("- bulkUpert success - " + persons.length + " persons");
        deferred.resolve(persons);
      },
      function(err){
        console.log("- bulkUpert error >>", err);
        deferred.reject(err);
      });

  return deferred.promise;
};