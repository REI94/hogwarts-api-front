import { Component, OnInit } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

  //List of characters that will be passed to the table component.
  listOfRequests: Character[];

  constructor() { }

  ngOnInit(): void {

    this.loadRequests();
  }

  loadRequests() {

    if(localStorage.getItem('requests') !== null){ //Avoid reading errors if a request has not yet been saved.

      let preList = JSON.parse(localStorage.getItem('requests'));

      preList.forEach(character => {

        const base64textString = character.image;

        if( base64textString.length !== 0 )
          character.image = "data:image/png;base64," + base64textString;
      });

      this.listOfRequests = preList;
    }
  }
}
