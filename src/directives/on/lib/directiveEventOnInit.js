"use strict";

import bindEvent from "../../../dom/event/bindEvent";
import render from "../../../rendering/render";

const directiveEventOnInit = function(node, ctrl, directiveContent) {
    const delemitEventList = function(str) {
        return str.split(",").map(pair => {
            return pair.trim().split(":").map(item => item.trim());
        });
    };
    const events = delemitEventList(directiveContent);

    events.forEach(eventItem => {
        const eventFn = function(ev) {
            console.log("FIRED");
            ctrl[eventItem[1]](ev, node);

            //render(ctrl);
        };

        bindEvent(node, eventItem[0], eventFn);
    });

    return {
        events
    };
};

export default directiveEventOnInit;