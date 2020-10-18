import { Component, OnInit } from '@angular/core';
import { CatalogoControllerService } from '../../services/catalogo-controller.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  categorias: any[] = [];

  constructor( private catalogoControllerService: CatalogoControllerService) { }

  ngOnInit(): void {

    this.catalogoControllerService.getCategorias().subscribe((data: any) => {
      this.categorias = data;
      console.log(this.categorias);
    })


  }

}
