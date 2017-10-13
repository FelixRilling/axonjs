import {
    evalDirective
} from "../../controller/retrieve";
import {
    DOM_PROP_TEXT
} from "../../constants";

const directiveTextRender = function (directive, node) {
    node.$element[DOM_PROP_TEXT] = String(evalDirective(directive.content, node).val);

    return true;
};

export {
    directiveTextRender
};
