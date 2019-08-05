import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
// angular
import { NgModule, Optional, SkipSelf } from "@angular/core";

// app
import { PIPES } from "../shared/pipes";
import { PROVIDERS } from "./services";

const MODULES: any[] = [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
];


@NgModule({
    imports: [
        ...MODULES,
    ],
    providers: [
        ...PROVIDERS,
    ],
    exports: [
        ...MODULES,
    ]
})
export class CoreModule {
    constructor(
        @Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded.',
            )
        }
    }

}
