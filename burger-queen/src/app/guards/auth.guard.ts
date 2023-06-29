import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
// export const authGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
//   return true;
// };
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {

    const currentUser = this.authService.getCurrentUser();

    if (state.url.includes('login')) {
      // Permitir acceso a la página de inicio de sesión
      return true;
    }

    if (currentUser) {
      const role = currentUser.role;

      if (state.url.includes('waiter') && role === 'waiter') {
        return true;
      } else if (state.url.includes('manager') && role === 'admin') {
        return true;
      } else if (state.url.includes('kitchen') && role === 'cheff') {
        return true;
      } 
      else {
        // Redirigir a una página de acceso denegado o mostrar un mensaje de error
        return this.router.parseUrl('**');
      }
    } else {
      // Redirigir a la página de inicio de sesión
      return this.router.parseUrl('/login');
    }
  }
}