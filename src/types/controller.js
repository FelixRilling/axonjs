"use strict";

import querySingle from "../dom/query/querySingle";

/**
 * Creates typeList entry for Controller
 *
 * @private
 * @param {Object} _this The context
 * @return void
 */
export default function(service, bundle) {
    //Construct Controller
    //
    //First value gets ignored by calling new like this, so we need to fill it
    bundle.unshift(null);
    //Apply into new constructor by accessing bind proto. from: http://stackoverflow.com/questions/1606797/use-of-apply-with-new-operator-is-this-possible
    const ctrl = service.fn = new(Function.prototype.bind.apply(service.fn, bundle));
    //Bind Context
    ctrl.context = querySingle("controller", service.name);



    return service;
}
