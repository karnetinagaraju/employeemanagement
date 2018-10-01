import { Injectable } from '@angular/core';

@Injectable({

    providedIn: 'root',
}
)
export class LogoutServices {

    displayLogout = false;

    logout() {
        this.displayLogout = false;
    }

    logIn() {
        this.displayLogout = true;
    }


}
