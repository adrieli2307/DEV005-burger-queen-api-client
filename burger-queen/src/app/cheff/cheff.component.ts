import { Component } from '@angular/core';
import { AuthService} from '../services/auth.service'
 
@Component({
  selector: 'app-cheff',
  templateUrl: './cheff.component.html',
  styleUrls: ['./cheff.component.css']
})
export class CheffComponent {
  constructor(private authService : AuthService){}
  nameUser: string | undefined = this.authService.getCurrentUser()?.user.email
  logout(){
    this.authService.logout();
  }

  rutaImgLogo: string = 'https://i.ibb.co/vZtH272/imgLogo.png'
  rutaImgFondo: string = 'https://i.ibb.co/VpkgVyf/img01.jpg'
}