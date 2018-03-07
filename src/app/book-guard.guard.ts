import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BookGuardGuard implements CanActivate {
 constructor() { }

  canActivate(_route: ActivatedRouteSnapshot): boolean {
    let price = +_route.url[2].path;
    if (price > 200){
    	 return true;
    	}else{
    		 return false;
    	}
     
   
  }
}
