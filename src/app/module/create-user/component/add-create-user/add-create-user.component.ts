import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormValidateService} from '../../../../core/services/Form-Validate.service';
import {AlertService} from '../../../../core/services/alert.service';
import {CreateUserService} from '../../service/create-user.service';

@Component({
  selector: 'app-add-create-user',
  templateUrl: './add-create-user.component.html',
  styleUrls: ['./add-create-user.component.scss']
})
export class AddCreateUserComponent implements OnInit {
  brithDate = '';
  FormatDate = {format: 'YYYY/MM/DD'};

  constructor(private errorService: FormValidateService,
              private alertService: AlertService,
              private service: CreateUserService,
              private router: Router) {
  }

  ngOnInit() {
  }

  onSubmitForm(form) {
    if (form.valid) {
      this.submittedForm(form.value);
    } else {
      this.errorService.generateArray(form);
    }
  }

  submittedForm(value) {
    this.service.createUser(value).subscribe((res) => {
      this.alertService.success(res.Message)
      this.onBack();
    });
  }

  onBack() {
    this.router.navigate(['/pages/create-user']);
  }
}
