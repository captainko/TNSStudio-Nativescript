// angular
import { Component, Input } from '@angular/core';

@Component({
    selector: 'action-bar',
    templateUrl: 'action-bar.component.html',
})
export class ActionBarComponent {
    @Input() title: string;
}
