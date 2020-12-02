import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t3',
  templateUrl: './t3.component.html',
  styles: [
  ]
})
export class T3Component implements OnInit {
  data:any = [
    {
      "Customer": "AKsys de México, S.A. de C.V.",
      "TotalFC": "$12,576.72",
      "Total": "$262,599.40",
      "TotalPor": "4.55%"
    },
    {
      "Customer": "AUDI MEXICO SA DE CV",
      "TotalFC": "$1,068.94",
      "Total": "$22,362.76",
      "TotalPor": "0.39%"
    },
    {
      "Customer": "BOSAL MEXICO SA DE CV",
      "TotalFC": "$501.12",
      "Total": "$10,514.40",
      "TotalPor": "0.18%"
    },
    {
      "Customer": "Continental Structural Plastics de Tijuana, S. de R.L. de C.V.",
      "TotalFC": "$3,736.36",
      "Total": "$78,166.54",
      "TotalPor": "1.36%"
    },
    {
      "Customer": "Daimler Vehiculos Comerciales Mexico S de RL  de CV",
      "TotalFC": "$55,158.00",
      "Total": "$1,157,314.17",
      "TotalPor": "20.07%"
    },
    {
      "Customer": "EZI Metales, S. A. de C. V.",
      "TotalFC": "$1,608.96",
      "Total": "$33,659.44",
      "TotalPor": "0.58%"
    },
    {
      "Customer": "GOSS GLOBAL MEXICO SA DE CV",
      "TotalFC": "$3,016.00",
      "Total": "$63,096.23",
      "TotalPor": "1.09%"
    },
    {
      "Customer": "Lamitubo, S.A. de C.V.",
      "TotalFC": "$0.00",
      "Total": "$2,424.40",
      "TotalPor": "0.04%"
    },
    {
      "Customer": "MINTH MEXICO COATINGS S.A. DE C.V.",
      "TotalFC": "$118,103.61",
      "Total": "$2,483,719.76",
      "TotalPor": "43.06%"
    },
    {
      "Customer": "ONNERA MEXICO SA DE CV",
      "TotalFC": "$12,655.37",
      "Total": "$264,241.56",
      "TotalPor": "4.58%"
    },
    {
      "Customer": "Plasticos Automotrices de Sahagun, S.A. de C.V.",
      "TotalFC": "$63,713.00",
      "Total": "$1,339,497.21",
      "TotalPor": "23.22%"
    },
    {
      "Customer": "PROVEEDORA DE SEGURIDAD INDUSTRIAL DEL GOLFO S.A DE C.V.",
      "TotalFC": "$858.40",
      "Total": "$18,010.77",
      "TotalPor": "0.31%"
    },
    {
      "Customer": "Unicar Plastics S.A. de C.V.",
      "TotalFC": "$1,531.20",
      "Total": "$32,127.34",
      "TotalPor": "0.56%"
    },
    {
      "Customer": "Grand Total",
      "TotalFC": "$274,527.68",
      "Total": "$5,767,733.98",
      "TotalPor": "100.00%"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
