import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
constructor(private auth:AuthService, router:Router, private userService:UserService){
  auth.user$.subscribe(user=>{
    if(user){
      userService.save(user)
      let returnUrl= JSON.parse(localStorage.getItem('returnUrl') || '{}');
      router.navigateByUrl(returnUrl);
    }
  })
}
}
