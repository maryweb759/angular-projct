import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<any>; 
  userId: string = '';

  constructor(private fsAuth: AngularFireAuth) { 
   this.user = fsAuth.user
  } 

  signup(email, password) { 
     return this.fsAuth.createUserWithEmailAndPassword(email, password)
  } 

  login(email, password) { 
    return this.fsAuth.signInWithEmailAndPassword(email, password)
  } 

  logout() { 
    return this.fsAuth.signOut()
  }
}
