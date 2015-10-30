var _ = require('lodash');

var en = _.indexBy(require('./objectives_v2_en'), 'id');
var es = _.indexBy(require('./objectives_v2_es'), 'id');
var de = _.indexBy(require('./objectives_v2_de'), 'id');
var fr = _.indexBy(require('./objectives_v2_fr'), 'id');



module.exports = _
    .chain(en)
    .mapValues(function(o) {
        o.name = {
            en: o.name,
            es: es[o.id].name,
            de: de[o.id].name,
            fr: fr[o.id].name,
        };
        return o;
    })
    .value();
