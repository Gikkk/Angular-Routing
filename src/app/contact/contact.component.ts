import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  signUpForm: FormGroup;

  constructor( private http: HttpClient) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      subject: new FormControl(null, Validators.required),
      message: new FormControl(null, Validators.required)
    });

  }

  onSubmit(){
    this.http.post<{name: string, email: EmailValidator, subject: string, message: string}>('https://giorgi-zho-default-rtdb.europe-west1.firebasedatabase.app/messages.json',
     this.signUpForm.value
     ).subscribe(data=>{
      console.log(data);
      this.signUpForm.reset();
    });
  }
}
