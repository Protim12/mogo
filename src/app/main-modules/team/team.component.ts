import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { TeamService } from 'src/app/services/team.service';
// FilterPipe

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  team;
  searchItem: string;
  teamDesignation = null;
  groupTeam: any;
  searchResult: any;

  public toggle: Boolean = false;
  public selectedInput: any = {};

  myarray = ["A", "B"]

  constructor(private _myTeam: TeamService) {}
  
  ngOnInit(): void {
    this.team = this._myTeam.getTeam();
    this.groupTeam = this.team;
  }

  searchTeamMember(event) {
    if(this.searchItem != "") {
      this.groupTeam = this.team.filter(res=>{
        return res.name.toLocaleLowerCase().match(this.searchItem.toLocaleLowerCase());
      })
      this.searchResult = this.team.filter((series) => {
        return series.name.toLowerCase().startsWith(event.target.value.toLowerCase());
      })

      this.toggle = false;
    }
    else if(this.searchItem == "") {
      this.ngOnInit();
      return this.searchResult = [];
    }
  }
  selectTeamMember(event) {
    if(this.teamDesignation != "") {
      this.groupTeam = this.team.filter(data=>{
        return data.designation?.toLowerCase().match(this.teamDesignation?.toLowerCase());
      })
    }
    else if(this.teamDesignation == "") {
      this.ngOnInit();
    }
  }


  showDetails(series) {
    this.selectedInput = series;
    this.toggle = true;
    this.searchItem = series.name;
  }
}
