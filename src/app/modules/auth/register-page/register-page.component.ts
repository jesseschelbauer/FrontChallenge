import { Component} from '@angular/core';
import { BasePageComponent } from '../../core/base-page.component';
import { LocationService } from '../../core/location.service';
import { AuthService } from '../auth.service';
import { RegisterModel } from '../models';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent extends BasePageComponent {

  constructor(private authService: AuthService, private locationService:LocationService) {
    super();
  }

  public register(loginModel: RegisterModel) {
    super.subscription = this.authService.register(loginModel).subscribe(e=> this.locationService.back() );
  }
}