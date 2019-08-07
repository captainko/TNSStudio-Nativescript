// nativescript
import { RouterExtensions } from "nativescript-angular/router";

// angular
import { Component } from "@angular/core";
import { MixerService } from "../services/mixer.service";

@Component({
    selector: 'mix-list',
    templateUrl: 'mix-list.component.html',
})
export class MixListComponent {

    constructor(
        private router: RouterExtensions,
        public mixerService: MixerService,
    ) {

    }
    public back() {
        this.router.back();
    }
};
