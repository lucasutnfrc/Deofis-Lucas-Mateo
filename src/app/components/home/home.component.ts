import { Component, OnInit } from '@angular/core';
import { CatalogoControllerService } from '../../services/catalogo-controller.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  destacados:any[] = [];
  imagenesBanners:string[] = ["assets/img/banner asus.jpg", "assets/img/banner s20.jpg", "assets/img/iPhone-11-Pro-Banner.png", "assets/img/ps4 banner.jpg"];
  banderaBanner: boolean = true;

  constructor( private catalogoControllerService: CatalogoControllerService ) { }

  ngOnInit(): void {

    this.catalogoControllerService.getDestacados().subscribe((data:any) => {
      this.destacados = data;
      console.log(this.destacados);
      console.log(this.imagenesBanners);
      
    })
    
  }

}
