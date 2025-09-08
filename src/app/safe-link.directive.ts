import { Directive } from "@angular/core";

@Directive({
    selector:'a[appSafeLink]',
    standalone: true,
    host:{
        '(click)': 'onLeavePage($event)'
    }
})
export class SafeLinkDirective{
    constructor(){
        console.log("safe link is working");
    }

    onLeavePage(event: MouseEvent){
        const wantsToLeave = window.confirm("Do you want to leave this page?");

        if(wantsToLeave){
            return;
        }
        event.preventDefault();
    }

}