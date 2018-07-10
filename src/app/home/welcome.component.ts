import { Component } from '@angular/core';

//home1 component
@Component({
    templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';
    myValue: Number = 56;
}
