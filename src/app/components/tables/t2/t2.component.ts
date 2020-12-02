import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t2',
  templateUrl: './t2.component.html',
  styles: [
  ]
})
export class T2Component implements OnInit {
  data:any = [
    {
      "GrupMaterials": "AMTEC FASTENERS",
      "AUTOMOTRIZ_VEHICULOS": 215000,
      "INDUSTRIAL_CAMIONES": "",
      "INDUSTRIAL_GENERAL": 5000,
      "Grand_Total": 220000
    },
    {
      "GrupMaterials": "OTROS",
      "AUTOMOTRIZ_VEHICULOS": "",
      "INDUSTRIAL_CAMIONES": "",
      "INDUSTRIAL_GENERAL": 14000,
      "Grand_Total": 14000
    },
    {
      "GrupMaterials": "PLASTEC FASTENERS",
      "AUTOMOTRIZ_VEHICULOS": 10000,
      "INDUSTRIAL_CAMIONES": "",
      "INDUSTRIAL_GENERAL": "",
      "Grand_Total": 10000
    },
    {
      "GrupMaterials": "RIVNUT FASTENERS",
      "AUTOMOTRIZ_VEHICULOS": 50500,
      "INDUSTRIAL_CAMIONES": "",
      "INDUSTRIAL_GENERAL": 49000,
      "Grand_Total": 99500
    },
    {
      "GrupMaterials": "RIVNUT SPARES",
      "AUTOMOTRIZ_VEHICULOS": 357,
      "INDUSTRIAL_CAMIONES": "",
      "INDUSTRIAL_GENERAL": 105,
      "Grand_Total": 462
    },
    {
      "GrupMaterials": "RIVNUT SPARES AUTOMA",
      "AUTOMOTRIZ_VEHICULOS": 9,
      "INDUSTRIAL_CAMIONES": "",
      "INDUSTRIAL_GENERAL": "",
      "Grand_Total": 9
    },
    {
      "GrupMaterials": "RIVNUT TOOLS",
      "AUTOMOTRIZ_VEHICULOS": 2,
      "INDUSTRIAL_CAMIONES": 10,
      "INDUSTRIAL_GENERAL": "",
      "Grand_Total": 12
    },
    {
      "GrupMaterials": "RIVQUICK SPARES",
      "AUTOMOTRIZ_VEHICULOS": "",
      "INDUSTRIAL_CAMIONES": "",
      "INDUSTRIAL_GENERAL": 11,
      "Grand_Total": 11
    },
    {
      "GrupMaterials": "Grand Total",
      "AUTOMOTRIZ_VEHICULOS": 275868,
      "INDUSTRIAL_CAMIONES": 10,
      "INDUSTRIAL_GENERAL": 68116,
      "Grand_Total": 343994
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
