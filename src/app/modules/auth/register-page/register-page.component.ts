import { Component} from '@angular/core';
import { BasePageComponent } from '../../core/base-page.component';
import { AuthService } from '../auth.service';
import { RegisterModel } from '../models';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent extends BasePageComponent {

  constructor(private authService: AuthService) {
    super();
  }

  public register(loginModel: RegisterModel) {
    super.subscription = this.authService.register(loginModel).subscribe();
  }
}