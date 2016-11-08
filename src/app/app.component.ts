import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  lat;
  lng:number;
  //lon;
  //_lonTest;
  show=false;
 
  constructor(){
    function success(position) {
    let lon=document.getElementById("lon");
    let lan=document.getElementById("lan");
        let a=position.coords.latitude;
        console.log(a);
    let interval=setInterval(()=>{
       
      if(position.coords.latitude > 0){
	    	lan.innerHTML=""+position.coords.latitude;
	    	lon.innerHTML=""+position.coords.longitude;
   		}
    },1000);
  }

  function error() {
  }


      navigator.geolocation.getCurrentPosition(success, error);
    let mapInterval=setInterval(()=>{
      navigator.geolocation.getCurrentPosition(success, error);
      this.lat=parseFloat(document.getElementById("lan").innerHTML);
      this.lng=parseFloat(document.getElementById("lon").innerHTML);
  		if(this.lat>0) {
			this.show=true;  			
  		}

  	},500);
  }
}
