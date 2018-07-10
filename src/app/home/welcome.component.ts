import { Component } from '@angular/core';

@Component({
    templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';
    myValue: Number = 56;
}
