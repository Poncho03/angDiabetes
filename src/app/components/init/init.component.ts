import { Component, OnInit } from '@angular/core';
import { Datos } from '../../interfaces/datos';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {

  aux: Datos[] = [];
  diags: Datos[] = [];

  constructor(
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.readDiagnosticos();
  }

  readDiagnosticos(){
    this.api.readData().subscribe((data: Datos[]) => {
      this.aux = data;
      let i = this.aux.length;
      this.diags = this.aux.splice(i-5, 5);
    });
  }

}