// nativescript
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
// angular
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { Routes } from "@angular/router";

// app
import { SharedModule } from "../shared/shared.module";
import { PROVIDERS } from "./services";
import { RecordComponent } from './components/record.component';

const COMPONENTS: any[] = [
    RecordComponent,
]

const routes: Routes = [
    { path: '', component: RecordComponent },
]

@NgModule({
    imports: [
        SharedModule,
        NativeScriptCommonModule,
        NativeScriptRouterModule.forChild(routes),
    ],
    declarations: [...COMPONENTS],
    providers: [...PROVIDERS],
    schemas: [NO_ERRORS_SCHEMA],
})
export class RecorderModule { }
