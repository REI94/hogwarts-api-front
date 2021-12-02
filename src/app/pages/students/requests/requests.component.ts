import { Component, OnInit } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

  listOfRequests: Character[] = [];

  constructor() { }

  ngOnInit(): void {

    this.loadRequests();
  }

  loadRequests() {

    // const newStudents = JSON.parse(localStorage.getItem("students"));
    // this.listOfRequests.push(newStudents);
    this.listOfRequests = JSON.parse(localStorage.getItem('requests'));
  }
}
