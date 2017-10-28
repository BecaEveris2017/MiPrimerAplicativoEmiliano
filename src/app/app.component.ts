import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name = 'Emiliano Ramirez Lugo';
  colores = ['negro', 'rojo', 'blanco', 'verde'];
  showCont:boolean;
  

agregarColor(color) {
  this.colores.push(color.value);
  console.log(color.value);
  color.value = '';
  return false;
}

switchView() {
 this.showCont = !this.showCont;
 }

}