import { IAxonNode, IAxonNodeRoot, IAxonDirective } from "../interfaces";
import { EDirectiveFn } from "../enums";
declare const getNodeRoot: (node: IAxonNode | IAxonNodeRoot) => IAxonNodeRoot;
declare const AxonNode: {
    new ($element: HTMLElement, $parent: IAxonNode, data?: object): {
        $parent: IAxonNode;
        $element: HTMLElement;
        $children: IAxonNode[];
        directives: IAxonDirective[];
        data: object;
        run(directiveFnId: EDirectiveFn): boolean;
    };
};
export { AxonNode, getNodeRoot };
