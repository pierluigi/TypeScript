//// [declarationEmitIndexTypeNotFound.ts]

export interface Test {
    [index: TypeNotFound]: any;
}


//// [declarationEmitIndexTypeNotFound.js]
"use strict";
