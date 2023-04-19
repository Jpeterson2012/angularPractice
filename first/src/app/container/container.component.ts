import { Component, ElementRef, ViewChild, ViewEncapsulation } from "@angular/core";
import { NotificationComponent } from "../notification/notification.component";

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css'],
    //encapsulation: ViewEncapsulation.None
})
export class ContainerComponent{

    @ViewChild('dobinput') dateOfBirth!: ElementRef;
    @ViewChild('ageinput') age!: ElementRef;
    @ViewChild(NotificationComponent, {static: true}) notifComp!: NotificationComponent;

    calculateAge(){
    let birthDate = new Date(this.dateOfBirth.nativeElement.value);
    let currentDate = new Date();
    let diffInMilliseconds = Math.abs(currentDate.getTime() - birthDate.getTime()); 
    let diffInYears = diffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    this.age.nativeElement.value = Math.floor(diffInYears);
    }
}