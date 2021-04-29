import { Component, OnInit } from '@angular/core';
import { Datos } from 'src/app/interfaces/datos';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  status: boolean = false;
  aux: Datos = {
    id: '',
    edad: 0,
    nivel: 0,
    esta: '',
    diag: ''
  }

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
  }

  evaluar(data: any){
    if(data.value.age<130){
      this.api.createData(data.value).subscribe((data: Datos) => {
        this.aux.nivel = data.nivel;
        this.aux.edad = data.edad;
        this.aux.esta = data.esta;
        this.aux.diag = data.diag;
        this.status = true;
        console.log("Diagnostico guardado", data);
      });
    }
    else{
      alert("Si la edad que ingresó es correcta, le recomendamos fuertemente que acuda"+
            "a su médico con mucha frecuencia. Y también lo felicitamos por vivir tantos años.")
    }
  }

  reset(){
    this.aux.nivel = 0;
    this.aux.edad = 0;
    this.status = false;
  }

}
