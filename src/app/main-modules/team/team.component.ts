import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  team;
  searchItem: string;
  teamDesignation: string;

  constructor(private _myTeam: TeamService) {}
  
  ngOnInit(): void {
    this.team = this._myTeam.getTeam();
  }

  searchTeamMember() {
    if(this.searchItem != "") {
      this.team = this.team.filter(res=>{
        return res.name.toLocaleLowerCase().match(this.searchItem.toLocaleLowerCase());
      })
    }
    else if(this.searchItem == "") {
      this.ngOnInit();
    }
  }
  selectTeamMember() {
    if(this.teamDesignation != "") {
      this.team = this.team.filter(data=>{
        return data.designation.toLocaleLowerCase().match(this.teamDesignation.toLocaleLowerCase());
      })
    }
    else if(this.teamDesignation == "") {
      this.ngOnInit();
    }
  }
}
