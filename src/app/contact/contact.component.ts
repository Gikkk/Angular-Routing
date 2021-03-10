import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, AfterViewInit, Renderer2, ViewChild } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit, OnInit{
  availability = 'Available'
  signUpForm: FormGroup;
  @ViewChild("status") onlineStatus: ElementRef;

  constructor( private http: HttpClient, private renderer: Renderer2,) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      subject: new FormControl(null, Validators.required),
      message: new FormControl(null, Validators.required)
    });

  }

  ngAfterViewInit(){
    this.getTime();
  }

  onSubmit(){
    this.http.post<{name: string, email: EmailValidator, subject: string, message: string}>('https://giorgi-zho-default-rtdb.europe-west1.firebasedatabase.app/messages.json',
     this.signUpForm.value
     ).subscribe(data=>{
      console.log(data);
      this.signUpForm.reset();
    });
  }

  getTime(){
    let currentTime = new Date();
    let hour = currentTime.getHours()

    if (hour >= 9 && hour <= 16 ) {
      this.renderer.setStyle(this.onlineStatus.nativeElement, 'backgroundColor', 'rgb(28, 221, 28)');
    } else {
      this.renderer.setStyle(this.onlineStatus.nativeElement, 'backgroundColor', 'red');
      this.availability = 'Not available';
    }
  }
}
