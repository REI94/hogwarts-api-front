import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Patronus, Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  form: FormGroup;
  listOfRequests: Character[] = [];

  constructor( private fb: FormBuilder ) {

    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {

    this.form = this.fb.group({
      name: ['', Validators.required],
      patronus: ['', Validators.required],
      age: ['', Validators.required],
      image: ['']
    });
  }

  saveRequest() {

    this.loadRequests();

    const newStudent = {
      name: this.form['controls'].name.value,
      patronus: this.form['controls'].patronus.value,
      age: this.form['controls'].age.value,
      image: this.form['controls'].image.value
    }

    this.listOfRequests = this.listOfRequests || [];  //Check that it is an array to avoid problems when using .push()
    this.listOfRequests.push(newStudent);

    localStorage.setItem("requests", JSON.stringify( this.listOfRequests ));
  }

  loadRequests() {
    this.listOfRequests = JSON.parse(localStorage.getItem('requests'));
  }
}
