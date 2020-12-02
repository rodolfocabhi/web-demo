import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styles: [
  ]
})
export class ResultComponent implements OnInit {
  data:any = [
    {
    Name: 'Gestamp',
    Date: '2020-11-05',
    Quantity: 100,
    Descargar: 'SI'
    },
    {
    Name: 'HBPO',
    Date: '2020-11-06',
    Quantity: 50,
    Descargar: 'NO'
    },
    {
    Name: 'Hella',
    Date: '2020-11-09',
    Quantity: 80,
    Descargar: 'SI'
    }
    ]
  constructor() { }

  ngOnInit(): void {
  }

}
