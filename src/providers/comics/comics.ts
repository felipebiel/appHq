import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ComicsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ComicsProvider {

  private urlBase:string = "https://gateway.marvel.com:443/v1/public/";
  private apiKey:string = "d6092692175826ff2c110014f6587519";
  private hashKey:string = "7dc7d330a8a1dfedddf6a45be638c574";

  constructor(public http: HttpClient) {
    //console.log('Hello ComicsProvider Provider');
  }

  public getCharacters(){
    //https://gateway.marvel.com/v1/public/characters?ts=1&limit=5&apikey=d6092692175826ff2c110014f6587519&hash=7dc7d330a8a1dfedddf6a45be638c574
    return this.http.get(this.urlBase+"characters?ts=1&limit=5&apikey="+ this.apiKey + "&hash=" + this.hashKey);
  }

  public getEvents(){
    //https://gateway.marvel.com/v1/public/characters?ts=1&limit=5&apikey=d6092692175826ff2c110014f6587519&hash=7dc7d330a8a1dfedddf6a45be638c574
    return this.http.get(this.urlBase+"events?ts=1&limit=5&apikey="+ this.apiKey + "&hash=" + this.hashKey);
  }

  public getComics(){
    //https://gateway.marvel.com/v1/public/characters?ts=1&limit=5&apikey=d6092692175826ff2c110014f6587519&hash=7dc7d330a8a1dfedddf6a45be638c574
    return this.http.get(this.urlBase+"comics?ts=1&orderBy=onsaleDate&limit=5&apikey="+ this.apiKey + "&hash=" + this.hashKey);
  }

  public getCharater(id:number){
    //https://gateway.marvel.com/v1/public/characters?ts=1&limit=5&apikey=d6092692175826ff2c110014f6587519&hash=7dc7d330a8a1dfedddf6a45be638c574
    return this.http.get(this.urlBase+"characters/"+ id +"?ts=1&apikey="+ this.apiKey + "&hash=" + this.hashKey);
  }

}
