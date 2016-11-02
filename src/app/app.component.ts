import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  lat;
  lng;
  show=false;
  constructor(){
  	function success(position) {
    let lon=document.getElementById("lon");
    let lan=document.getElementById("lan");
    let interval=setInterval(()=>{
    	let longitude: number = position.coords.longitude;
    	let latitude:number  = position.coords.latitude;
    	if(latitude>0){
	    	lan.innerHTML=""+latitude;
	    	lon.innerHTML=""+longitude;
   		}
    },500);
  };

  function error() {
  };


  navigator.geolocation.getCurrentPosition(success, error);
  	let mapInterval=setInterval(()=>{
  		this.lat=parseFloat(document.getElementById("lan").innerHTML);
  		this.lng=parseFloat(document.getElementById("lon").innerHTML);
  		if(this.lat>0) {
			this.show=true;  			
  		}

  	},500);
  }
}
