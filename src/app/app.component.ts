// angular
import { Component } from "@angular/core";

// nativescript
import { isIOS } from "tns-core-modules/platform";
import { topmost } from "tns-core-modules/ui/frame";
import * as app from 'tns-core-modules/application';

// app
import { AuthService } from "./modules/core/services/auth.service";
declare var android;
@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html"
})
export class AppComponent {
    constructor(private authService: AuthService) {
        if (isIOS) {
            /**
             * 0 = black text
             * 1 = white text
             */
            topmost().ios.controller.navigationBar.barStyle = 1;
        } else {
            let decorView = app.android.startActivity.getWindow().getDecorView();

            decorView.setSystemUiVisibility(android.view.View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR);
        }
    }
}
