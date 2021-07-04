import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.scss']
})
export class NewArrivalsComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) { }
  checkOutForm:FormGroup;
  submitted=false;
  /*empty whitespace(when no data is entered) validation*/
  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
}


get f() { return this.checkOutForm.controls; }

  ngOnInit(): void {
    this.checkOutForm = this.formBuilder.group({
      firstName: ['',[ Validators.required, this.noWhitespaceValidator]],
      lastName: ['',[ Validators.required, this.noWhitespaceValidator]],
      companyName: ['', [this.noWhitespaceValidator]],
      countryName: ['', [Validators.required, this.noWhitespaceValidator]],
      streetAddress: ['', [Validators.required, this.noWhitespaceValidator]],
      appartmentAdress:['',[ Validators.required, this.noWhitespaceValidator]],
      cityName: ['', [Validators.required, this.noWhitespaceValidator]],
      stateName: ['', [Validators.required, this.noWhitespaceValidator]],
      postcode: ['', [Validators.required, this.noWhitespaceValidator]],
      phoneNumber: ['', [Validators.required, this.noWhitespaceValidator, Validators.pattern("[0-9 ]{11}")]],
      email:['', [Validators.required,Validators.email, this.noWhitespaceValidator]],
      desc:  ['',[this.noWhitespaceValidator]]
  
    })
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.checkOutForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)')
    console.log('submit')
}

}
