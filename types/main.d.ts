import { IAxonNode, IAxonDirective, IAxonConfig } from "./interfaces";
import { EDirectiveFn } from "./enums";
declare const AxonNodeRoot: {
    new (cfg: IAxonConfig): {
        methods: object;
        init(): boolean;
        render(): boolean;
        $parent: IAxonNode;
        $element: HTMLElement;
        $children: IAxonNode[];
        directives: IAxonDirective[];
        data: object;
        run(directiveFnId: EDirectiveFn): boolean;
    };
};
export default AxonNodeRoot;
