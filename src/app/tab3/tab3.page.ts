import { Component, Renderer2 } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { RequestsService } from '../services/requests.service';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};
const apiUrl = 'http://localhost:8000/api/requests/compilar';
const apiUrl2 = 'http://localhost:8000/api/requests/reporte';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  otherTheme:boolean;
  constructor(private http: HttpClient, private RequestsService: RequestsService, private renderer:Renderer2, private authService:AuthService, private router: Router) {}
 
 
  ionViewWillEnter(){
    console.log('cambio2');
    this.otherTheme=this.authService.otherTheme;
  }

  
  requestReportCompile(){
    return this.http.get(apiUrl);
  }

  requestReportViewer(){
    // this.RequestsService.getReport();
    window.open('https://ayudadeproyecto.000webhostapp.com');
  }
/*   onToggleColorTheme(event){
  console.log(event.detail.checked);
  if(event.detail.checked){
    this.renderer.addClass(document.body, 'dark-theme');
  }
  } */
  goPreferences(){
    this.router.navigateByUrl("/preferences");
  }
}
