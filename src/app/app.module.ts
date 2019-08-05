// nativescript

//angular
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

//app
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./modules/core/core.module";
import { PlayerModule } from "./modules/player/player.module";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        CoreModule,
        AppRoutingModule,
        PlayerModule,
    ],
    declarations: [
        AppComponent,
    ],
    // providers: [...PROVIDERS],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
