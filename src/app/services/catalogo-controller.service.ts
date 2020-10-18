import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CatalogoControllerService {


  constructor( private httpClient: HttpClient ) { 

  }

  getQuery(query:string){
    const url = `https://api.deofisdev.online/api/${query}`;
    return this.httpClient.get(url);

  }

  getCategorias(){

    return this.getQuery('catalogo/categorias').pipe(map((data:any) => {
      return data;
    }))
    
   }


  getDestacados(){
    return this.getQuery('catalogo/destacados').pipe(map((data:any) => {
      return data;
    }))
  }


}
