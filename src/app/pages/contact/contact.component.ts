import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactdataService } from 'src/app/services/contactdata.service';
import { Contact } from './contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactData = new Contact();
  messageForm: FormGroup;
  submitted = false;
  success = false;
 
  pageTitle: string;

  constructor(
    private formBuilder: FormBuilder,
    private contactDataService: ContactdataService
  ) {
    this.pageTitle = "Contact Us";
  }


  ngOnInit(): void {

    // Add Class in body
    document.getElementsByTagName('body')['0'].classList.add('contact-page');

    // Form Group
    this.messageForm = this.formBuilder.group({
      yourname: ['', Validators.required],
      youremail: ['', Validators.required],
      yourmessage: ['', Validators.required],
    });

  }

  onSubmit() {
    this.submitted = true;

    console.log(this.messageForm);

    if(this.messageForm.invalid)
      return;

    // return this.contactDataService.contactForm(this.contactData).subscribe() 

    this.success = true;
  }


  ngOnDestroy(): void {

      // Remove Class in body
      document.getElementsByTagName('body')['0'].classList.remove('contact-page');

  }
  
}
