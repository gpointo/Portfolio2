import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { SnotifyService } from 'ng-snotify';
import { environment } from '../../../environments/environment';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
 
  model: any = {};

 

  snotifyConfig = environment.snotifyConfig;

  constructor(
    private profile: ProfileService,
    private snotify: SnotifyService
  ) { }

  ngOnInit() {
  }
sendEmail(f: NgForm){
  if( f.form.valid ){
    console.log(this.model.name)
    this.contact()
    f.resetForm()
  }
 
}
  contact() {
    this.profile.contactus(this.model).subscribe(data => {
        this.snotify.success( "Email has been sent");
    }, err => {
      this.snotify.error('Something went wrong. Try again later.');
    });
  }

}
