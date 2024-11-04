import { NavigationExtras, Router } from '@angular/router';
import { FirebaseService } from './../../service/firebase.service';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email = ""
  password = ""

  constructor(private firebase:FirebaseService, private router:Router, private alercontroller:AlertController) { }

  ngOnInit() {
  }

  async login(){
    try {
        let usuario= await this.firebase.auth(this.email, this.password);
        console.log(usuario);
        const NavigationExtras:NavigationExtras = {
          queryParams:{email: this.email}
        };

  
        this.router.navigate(['/principal'], NavigationExtras);
      }catch (error) {
        console.log(error);
        this.popAlert();
      }
  }

  async popAlert(){
    const alert=await this.alercontroller.create({
      header: 'Error',
      message: 'Usuario o contraseña incorrecta',
      buttons: ['OK']
    })
    await alert.present();
  }






}
