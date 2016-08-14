"use strict";

import queryDirective from "../../query/directives/query";
import read from "../../query/directives/read";

import digest from "../../render/digest";

import bind from "../bind";

import {
    eachNode
} from "../../../util";
/**
 * Binds xn-model
 *
 * @private
 * @param {Object} ctrl The Controller
 * @return {Node} context The Controller context
 */
export default function(ctrl, context) {
    const result = [];
    const elements = queryDirective("model", "*", context);

    bind(elements, "change", modelEvent);
    bind(elements, "keydown", modelEvent);

    eachNode(elements, (element, i) => {
        result.push({
            i,
            element,
            type: "model",
            value: read(element, "model")
        });
    });

    return result;

    function modelEvent(ev, dom) {
        const content = dom.value;
        const modelFor = read(dom, "model");

        console.log("MODEL:", modelFor, content);
        ctrl[modelFor] = content;

        digest();
    }
}
