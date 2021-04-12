import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() { }

  getTeam() {
    return [
      {
        "id": 1,
        "name": "MATTHEW DIX",
        "designation": "Graphic Design",
        "thumb": "assets/images/team/team-1.jpg",
        "facebook": "https://yosite.orderpoz.co.uk/",
        "twitter": "https://yosite.orderpoz.co.uk/",
        "pinterest": "https://yosite.orderpoz.co.uk/",
        "instagram": ""
      },
      {
        "id": 2,
        "name": "CHRISTOPHER CAMPBELL",
        "designation": "Branding/UX Design",
        "thumb": "assets/images/team/team-2.jpg",
        "facebook": "https://yosite.orderpoz.co.uk/",
        "twitter": "https://yosite.orderpoz.co.uk/",
        "pinterest": "https://yosite.orderpoz.co.uk/",
        "instagram": "https://yosite.orderpoz.co.uk/"
      },
      {
        "id": 3,
        "name": "MICHAEL FERTIG",
        "designation": "Developer",
        "thumb": "assets/images/team/team-3.jpg",
        "facebook": "https://yosite.orderpoz.co.uk/",
        "twitter": "https://yosite.orderpoz.co.uk/",
        "pinterest": "https://yosite.orderpoz.co.uk/",
        "instagram": "https://yosite.orderpoz.co.uk/"
      }
    ]
  }
}
