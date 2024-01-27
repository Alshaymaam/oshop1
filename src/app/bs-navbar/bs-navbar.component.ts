import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrl: './bs-navbar.component.css'
})
export class BsNavbarComponent {
 appUser!: AppUser |null;
  constructor(private auth:AuthService){ 
    auth.appUser$.subscribe(appUser =>appUser=appUser)
   }
  logout(){
    this.auth.logout();

  }

}
