import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Character } from '../../../interfaces/character.interface';

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

  prepareRequest() {

    //Get image file from HTML
    const imageFile = ((document.getElementById("image") as HTMLInputElement).files);

    //Convert the image to a valid format to save it
    this.handleFileSelect(imageFile);
  }

  saveRequest(base64textString: string) {

    const newStudent = {
      name: this.form['controls'].name.value,
      patronus: this.form['controls'].patronus.value,
      age: this.form['controls'].age.value,
      image: base64textString
    }

    this.loadRequests();

    this.listOfRequests = this.listOfRequests || [];  //Check that it is an array to avoid problems when using .push()
    this.listOfRequests.push(newStudent);

    localStorage.setItem("requests", JSON.stringify( this.listOfRequests ));
  }

  loadRequests() {

    this.listOfRequests = JSON.parse(localStorage.getItem('requests'));
  }

  handleFileSelect(files){

    const file = files[0];

    if (files && file) {
        let reader = new FileReader();

        reader.onload = this._handleReaderLoaded.bind(this);

        reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {

    const binaryString = readerEvt.target.result;
    const base64textString = btoa(binaryString);
    this.saveRequest(base64textString);
  }
}
