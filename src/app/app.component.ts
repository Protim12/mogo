import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('alarmInput') alarmInput:ElementRef;
  
  title = 'mogo';
  
  inputValue:any;
  distance;
  alarmTime:any;
  alarmShow = false;

  milliseconds = 1000;
  hours = 24;
  minutes = 60;
  seconds = 60;

  dayRemaining = 0;
  hourRemaining = 0;
  minuteRemaining = 0;
  secondRemaining = 0;
  counterInterval;
  audio = new Audio('https://www.tonesmp3.com/ringtones/best-alarm-clock-ringtones.mp3');
  alarmPopupValue = false;

  constructor() {}

  ngOnInit(): void {
    // this.alarm()
  }

  playAudio() {
    this.audio.play();
  }

  alarm(event) {
    event.preventDefault();
    this.counterInterval = setInterval(() => {
      this.getAlarmTime()
    },
    1000)
    
  }

  getAlarmTime() {
    this.inputValue = new Date(this.alarmInput.nativeElement.value);
    this.distance = this.inputValue - new Date().getTime();

    this.secondRemaining = Math.floor((this.distance) / (this.milliseconds) % this.seconds);
    this.minuteRemaining = Math.floor((this.distance) / (this.milliseconds * this.minutes) % this.seconds);
    this.hourRemaining = Math.floor((this.distance) / (this.milliseconds * this.minutes * this.seconds) % this.hours);
    this.dayRemaining = Math.floor((this.distance) / (this.milliseconds * this.minutes * this.seconds * this.hours));
    
    if(this.distance >= 0) {
      setTimeout(()=> {
        console.log("alarming");
        this.playAudio()
        this.alarmPopupValue = true;
      }, this.distance);
    }

    else if(this.distance < 0) {
      this.distance = 0;
      this.secondRemaining = 0;
      this.minuteRemaining = 0;
      this.hourRemaining = 0;
      this.dayRemaining = 0;
    }
  }

  alarmPopup() {
    this.alarmShow = !this.alarmShow
  }

  stopAlarm() {
    this.audio.pause();
    this.audio.currentTime = 0;
    this.alarmPopupValue = false;
  }
}
