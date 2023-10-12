import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";

@Component({
  selector: 'app-complex-form',
  templateUrl: './complex-form.component.html',
  styleUrls: ['./complex-form.component.scss']
})
export class ComplexFormComponent implements OnInit {

  mainForm!: FormGroup;
  personalInfoForm!: FormGroup;
  contactPreferenceCtrl!: FormControl;
  emailCtrl!: FormControl;
  confirmEmailCtrl!: FormControl;
  emailForm!: FormGroup;
  phoneCtrl!: FormControl;
  passwordCtrl!: FormControl;
  confirmPasswordCtrl!: FormControl;
  loginInfoForm!: FormGroup;

  showEmailCtrl$!: Observable<boolean>;
  showPhoneCtrl$!: Observable<boolean>;



  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initFormsControls();
    this.initMainForm();
    this.initFormObservables();
  }

  private initMainForm(): void {
    this.mainForm = this.formBuilder.group({
      personalInfo: this.personalInfoForm,
      contactPreference: this.contactPreferenceCtrl,
      email: this.emailForm,
      phone: this.phoneCtrl,
      loginInfo: this.loginInfoForm
    });
  }

  private initFormsControls():void {
    this.personalInfoForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
    this.contactPreferenceCtrl = this.formBuilder.control('email');
    this.emailCtrl = this.formBuilder.control('', [Validators.required, Validators.email]);
    this.confirmEmailCtrl = this.formBuilder.control('', [Validators.required, Validators.email]);
    this.emailForm = this.formBuilder.group({ email: this.emailCtrl, confirm: this.confirmEmailCtrl });
    this.phoneCtrl = this.formBuilder.control('');
    this.passwordCtrl = this.formBuilder.control('', [Validators.required, Validators.minLength(8)]);
    this.confirmPasswordCtrl = this.formBuilder.control('', [Validators.required, Validators.minLength(8)]);
    this.loginInfoForm = this.formBuilder.group({ username: ['', Validators.required], password: this.passwordCtrl, confirmPassword: this.confirmPasswordCtrl });
  }

  onSubmitForm() {
    console.log(this.mainForm.value);

  }

  private initFormObservables() {
    this.showEmailCtrl$ = this.contactPreferenceCtrl.valueChanges.pipe(
      startWith(this.contactPreferenceCtrl.value),
      map(preference => preference === 'email'),
    );
    this.showPhoneCtrl$ = this.contactPreferenceCtrl.valueChanges.pipe(
      startWith(this.contactPreferenceCtrl.value),
      map(preference => preference === 'phone'),
    );
  }
}
