import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;
  constructor(private fsAuth: AngularFireAuth, private ngZone: NgZone, private router: Router,) { 
    this.fsAuth.authState.subscribe(user => { 
      if(user) {
         this.userData = user; 
         localStorage.setItem("user", this.userData.email)
      }
    }) 
  } 
  signIn(email, password) { 
    return this.fsAuth.signInWithEmailAndPassword(email, password)
    .then(result => { 
      this.router.navigate(['/'])
    }).catch(err => { 
      window.alert(err.message)
    })
  } 

  signUp(email, password) { 
    return this.fsAuth.createUserWithEmailAndPassword(email, password)
    .then(result => { 
      this.router.navigate(['/'])
    }).catch(err => { 
      window.alert(err.message)
    })
  } 

  logOut() { 
    return this.fsAuth.signOut().then(() => { 
      localStorage.removeItem("user")
      this.router.navigate(['/login']) 
    })
  } 

  isLoggedIn() { 
    const user = localStorage.getItem("user");
    return user? true: false;
  } 
  getUser() {
    const user = localStorage.getItem("user") 
    return user? user: null;
  }
}
