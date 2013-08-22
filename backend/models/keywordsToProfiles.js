var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var profileSchema = require ('./profiles.js'),
    keywordSchema = require ('./keywords.js');

var keywordToProfileSchema = module.exports = {};

var keywordToProfile = new Schema({
  keywordId: profileSchema,
  profileId: keywordSchema
});

keywordToProfileSchema.keywordToProfileModel = mongoose.model('keywordToProfiles', keywordToProfile);