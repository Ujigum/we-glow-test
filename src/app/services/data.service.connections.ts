//const fetch = require('node-fetch');

const API_REPO = `https://jsonplaceholder.typicode.com/posts`;

//const API_REPO = `https://jsonplaceholder.typicode.com/posts`;
const AUTH_KEY = "121181|T5eFtwEkEaDNCYC3k2BdkQYLtSOfX9f4sT57PE2";

// how do i turn the constants into a session? :S


import { Injectable } from '@angular/core';
//import { get } from 'http';


export interface Recipes {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: string;
  uri: string;
}

@Injectable({
  providedIn: 'root'
})

export class DataService  {

  public Recipes: Recipes[] = [];
  public linkLocation = '';

  public getData() {
    //let url = API_REPO;
    // Default options are marked with *
    const response = fetch(this.linkLocation, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      //mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      //credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "Authorization Bearer":AUTH_KEY
      },
      //redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      //body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response; // parses JSON response into native JavaScript objects
  }

  public set_url(uri:any){
    this.linkLocation =  uri;
  }

  public getURL() {
    return this.linkLocation;
  }

}

