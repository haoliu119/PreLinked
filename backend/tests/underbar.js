var _ = {};
_.each = function(obj, iterator, context) {
if (obj == null) return;
if (obj.length === +obj.length) {
  for (var i = 0, l = obj.length; i < l; i++) {
    if (iterator.call(context, obj[i], i, obj) === {}) return;
  }
} else {
  for (var key in obj) {
    if (_.has(obj, key)) {
      if (iterator.call(context, obj[key], key, obj) === {}) return;
    }
  }
}
};

// Export for Node.js environments
if (typeof module !== 'undefined') {
module.exports = _;
}