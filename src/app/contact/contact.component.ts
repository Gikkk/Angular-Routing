import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{
  availability = "Not available";
  signUpForm: FormGroup;
  currentTime;
  hour: number;
  submitted = false;

  @ViewChild("status") onlineStatus: ElementRef<HTMLElement>;

  constructor( private http: HttpClient, private renderer: Renderer2,) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      subject: new FormControl(null, Validators.required),
      message: new FormControl(null, Validators.required)
    });

    setInterval(() => {
      this.currentTime = new Date();
      this.hour = this.currentTime.getHours();

      if (this.hour >= 9 && this.hour <= 19 ) {
        this.renderer.setStyle(this.onlineStatus.nativeElement, 'backgroundColor', 'rgb(28, 221, 28)');
        this.availability = "Available"
      } else {
        this.renderer.setStyle(this.onlineStatus.nativeElement, 'backgroundColor', 'red');
        this.availability = "Not available"
      }
    }, 1800000);
  }

  onSubmit(){
    this.http.post<{name: string, email: EmailValidator, subject: string, message: string}>('https://giorgi-zho-default-rtdb.europe-west1.firebasedatabase.app/messages.json',
     this.signUpForm.value
     ).subscribe(data=>{
      console.log(data);
      this.submitted = true;
      this.signUpForm.reset();
    });
  }
}
