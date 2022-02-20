import { Component, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

@Component({template:""})
export class BasePageComponent implements OnDestroy{
    
    private _subscriptions: Subscription[] = [];

    set subscription(subscription:Subscription){
        this._subscriptions.push(subscription);
    }

    ngOnDestroy(): void {
        this._subscriptions.forEach(s => s.unsubscribe());
    }
}