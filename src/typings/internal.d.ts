/// <reference path="node/node.d.ts" />

declare module NodeJS {
    interface Global {
        $longshot: any;
    }
}