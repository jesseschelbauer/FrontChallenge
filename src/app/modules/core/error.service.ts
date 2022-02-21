import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {  
  constructor(private toastr: ToastrService) { }

  handle(e: HttpErrorResponse) {
    this.toastr.error(e?.error?.message);
  }
}
