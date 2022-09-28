import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-test';

  form!: FormGroup;
  //valueChanges$!: Observable<any>;

  constructor(
    private formBuilder: FormBuilder) { }

    ngOnInit(): void {
      this.buildForm();
      //this.valueChanges$ = this.form.valueChanges;

      this.form.controls['code'].valueChanges.subscribe(
        value => console.log(value)
      );

      this.form.controls['description'].valueChanges.subscribe(
        value => console.log(value)
      );

    }
  
  buildForm() {
    this.form= this.formBuilder.group({
      code: ['', [Validators.required, Validators.maxLength(4)]],
      description: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-0-_\s.áéíóúÁÉÍÓÚñÑ]+$/)]]
    });
  }

  test(){
    console.log(this.form);
    console.log(this.form.controls);
  };
}
