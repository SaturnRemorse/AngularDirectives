import { Directive, ElementRef, inject, input } from "@angular/core";

@Directive({
    selector:'a[appSafeLink]',
    standalone: true,
    host:{
        '(click)': 'onLeavePage($event)'
    }
})
export class SafeLinkDirective{

    queryParameter = input<string>('myapp', {alias: 'appSafeLink'});
    private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef)

    constructor(){
        console.log("safe link is working");
    }

    onLeavePage(event: MouseEvent){
        const wantsToLeave = window.confirm("Do you want to leave this page?");

        if(wantsToLeave){
            //const address = (event.target as HTMLAnchorElement).href;
            const address = this.hostElementRef.nativeElement.href;
            this.hostElementRef.nativeElement.href = address+ '?from='+this.queryParameter();
            return;
        }
        event.preventDefault();
    }

}