var _ = require('lodash');

var en = _.indexBy(require('./objectives_v2_en'), 'id');
var es = _.indexBy(require('./objectives_v2_es'), 'id');
var de = _.indexBy(require('./objectives_v2_de'), 'id');
var de = _.indexBy(require('./objectives_v2_de'), 'id');



let objectives_v2 = _
    .chain(en)
    .mapValues(o => {
        o.name = {
            en: o.name,
            es: es[o.id].name,
            de: de[o.id].name,
            fr: fr[o.id].name,
        };
        return o;
    })
    .value();



module.exports = objectives_v2;
