import {Component, OnInit} from '@angular/core';
import {GetTokenService} from '../../service/get-token.service';
import {FormValidateService} from '../../../../core/services/Form-Validate.service';

@Component({
  selector: 'app-page-get-token',
  templateUrl: './page-get-token.component.html',
  styleUrls: ['./page-get-token.component.scss']
})
export class PageGetTokenComponent implements OnInit {

  constructor(private service: GetTokenService,
              private errorService: FormValidateService) {
  }

  ngOnInit() {
  }

  onSubmitForm(form) {
    if (form.invalid) {
      this.errorService.generateArray(form);

    } else {
      this.service.getUserToken(form.value).subscribe((res) => {
        localStorage.setItem('userToken' , res.Data)
        debugger;
      });
    }
  }
}
