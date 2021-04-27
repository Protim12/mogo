import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataServeService } from 'src/app/services/data-serve.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  myContacts:any;

  form = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    // password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{5,}')])
  })

  constructor( private contacts: DataServeService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.myContacts = this.contacts.contact;
    // this.myContacts = this.httpClient.get('./assets/contact-list.json')
  }

  onSubmit() {
    // return this.httpClient.get('./assets/name-of-the-file.json')
    // console.log(JSON.stringify(this.form.value));
    this.httpClient.post(this.myContacts, this.form.value).subscribe((result:any[])=>{
      console.log(result)
    })
  }

}
