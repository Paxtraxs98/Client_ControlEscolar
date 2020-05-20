import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  mostrar()
  {
    document.getElementById('toolbarOpc').style.display = 'block'; 
    document.getElementById('openMenu').style.display = 'none'; 
    document.getElementById('closeMenu').style.display = 'block'; 
  }
  ocultar()
  {
    document.getElementById('toolbarOpc').style.display = 'none'; 
    document.getElementById('openMenu').style.display = 'block'; 
    document.getElementById('closeMenu').style.display = 'none'; 
  }
}
