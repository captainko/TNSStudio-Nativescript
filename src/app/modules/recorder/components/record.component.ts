import {  Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    templateUrl: './record.component.html',
})
export class RecordComponent{
    constructor(private router: RouterExtensions) {}

    back() {
        this.router.back();
    }
}
