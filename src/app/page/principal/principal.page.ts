import { FirebaseService } from 'src/app/service/firebase.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  email:string = "";

  constructor(private firebase:FirebaseService, private router:Router, private activate:ActivatedRoute) { 
    this.activate.queryParams.subscribe(params => {
      this.email = params['email']
      console.log(this.email)

    })
  }

  ngOnInit() {
  }

  async logout(){
    await this.firebase.logout();

    this.router.navigateByUrl("login")
  }
 

}
