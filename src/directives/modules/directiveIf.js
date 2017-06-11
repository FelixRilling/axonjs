"use strict";

import retrieveExpression from "../../controller/retrieveExpression";

import { DOM_ATTR_HIDDEN } from "../../constants";

const directiveIfRender = function(directive, node) {
    const element = node._element;
    const expressionValue = retrieveExpression(directive.val, node).val;

    if (expressionValue) {
        element.removeAttribute(DOM_ATTR_HIDDEN);

        return true;
    } else {
        element.setAttribute(DOM_ATTR_HIDDEN, true);

        return false;
    }
};

export { directiveIfRender };
