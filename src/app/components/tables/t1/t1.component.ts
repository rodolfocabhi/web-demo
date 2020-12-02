import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t1',
  templateUrl: './t1.component.html',
  styleUrls: ['./t1.component.css']
})
export class T1Component implements OnInit {
  data:any =  [ {
    "ItemCode": 20021060715,
    "Dscription": "IMTEC M6x10 Diam. 13mm",
    "Quantity": 200000
  },
  {
    "ItemCode": 22603000018,
    "Dscription": "Junta D32 018 [1000 P, 2000 P, 3000 P]",
    "Quantity": 1
  },
  {
    "ItemCode": 22603000020,
    "Dscription": "Junta X 24.99/3.53 [1000 P, 2000 P, 3000 P]",
    "Quantity": 1
  },
  {
    "ItemCode": 22603000023,
    "Dscription": "Junta D32 023 [1000 P, 2000 P, 3000 P]",
    "Quantity": 1
  },
  {
    "ItemCode": 22603000043,
    "Dscription": "Junta O 8/2 [1000 P, 2000 P]",
    "Quantity": 1
  },
  {
    "ItemCode": 22603000044,
    "Dscription": "Junta O 10/2 [1000 P, 2000 P, 3000 P]",
    "Quantity": 1
  },
  {
    "ItemCode": 22603000048,
    "Dscription": "Junta O 9/2 [1000 P, 2000 P]",
    "Quantity": 2
  },
  {
    "ItemCode": 22603000275,
    "Dscription": "Distribuidor completo [1000 P]",
    "Quantity": 3
  },
  {
    "ItemCode": 22604050001,
    "Dscription": "Boquilla 5.0 [2000 B, 3000 B]",
    "Quantity": 1
  },
  {
    "ItemCode": 23391060940,
    "Dscription": "TUERCA REMACHABLE RIVNUT RK M6 ESP 936 054 41 NCr(VI)",
    "Quantity": 12000
  },
  {
    "ItemCode": 23530201000,
    "Dscription": "Herramienta M-2007 con puntas M5-M12",
    "Quantity": 2
  },
  {
    "ItemCode": 23615600511,
    "Dscription": "Accionador Kit Vertical [2007, 2009, 2007 PN, 2009 PN, EPKC Vertical mando una mano y dos manos]",
    "Quantity": 8
  },
  {
    "ItemCode": 40500100069,
    "Dscription": "Snaploc Coupling Diameter 21.5",
    "Quantity": 10000
  },
  {
    "ItemCode": 56093060002,
    "Dscription": "TUERCA REMACHABLE M6 CABEZA CUADRADA C/ RECUBRIMIENTO",
    "Quantity": 32500
  },
  {
    "ItemCode": 56093061230,
    "Dscription": "TUERCA REMACHABLE RIVNUT RK M6 PO 300 AC C S",
    "Quantity": 6000
  },
  {
    "ItemCode": "1014-000034348040020",
    "Dscription": "TUERCA REMACHABLE RIVNUT RK M4 RFO 200 INOX SH",
    "Quantity": 35000
  },
  {
    "ItemCode": "1022-000000000100464",
    "Dscription": "TUERCA REMACHABLE RIVNUT TW 10-32 D 330 AC C",
    "Quantity": 5000
  },
  {
    "ItemCode": "2062-000000000230364",
    "Dscription": "Punta macho 5/16-18 [2005, 2007, 2009, 2007 PN, 2009 PN, EPKC, EPK, SAC]",
    "Quantity": 5
  },
  {
    "ItemCode": "2062-000000000230422",
    "Dscription": "Punta macho M5 [2005, 2007, 2009, 2007 PN, 2009 PN, EPKC, EPK, SAC]",
    "Quantity": 100
  },
  {
    "ItemCode": "2064-000023615365807",
    "Dscription": "Conjunto Push Pull [2005, 2007, 2009, 2007 PN, 2009 PN, 3007, 3007 PN, EPKC, EPK]",
    "Quantity": 1
  },
  {
    "ItemCode": "2084-000023680300006",
    "Dscription": "Acoplamiento sistema tornillo M3, M4, M5, M6, M8 [2005,1007, 2007, 2009, 2007 PN, 2009 PN, EPKC, SAC",
    "Quantity": 15
  },
  {
    "ItemCode": "2084-000023680300007",
    "Dscription": "Casquillo de tracción [2007, 2009, 2007 PN, 2009 PN, 3007 PN, EPKC, SAC]",
    "Quantity": 8
  },
  {
    "ItemCode": "2084-000023680300022",
    "Dscription": "Junta 022 [2007, 2009, EPKC]",
    "Quantity": 2
  },
  {
    "ItemCode": "2084-000023680300024",
    "Dscription": "Anillo de guiado 024 [2007, 2009, EPKC]",
    "Quantity": 3
  },
  {
    "ItemCode": "2084-000023680300026",
    "Dscription": "Muelle [2007, 2009, EPKC]",
    "Quantity": 3
  },
  {
    "ItemCode": "2085-000023680300400",
    "Dscription": "Cabezal corto [2007, 2009, 2007 PN, 2009 PN, 3007 PN, EPKC, SAC]",
    "Quantity": 8
  },
  {
    "ItemCode": "2094-000028252128022",
    "Dscription": "Junta 022 [EPKC]",
    "Quantity": 8
  },
  {
    "ItemCode": "2094-000028252128032",
    "Dscription": "Varilla Push Pull [2007, 2009, 2007 PN, 2009 PN, 3007 PN, EPKC]",
    "Quantity": 1
  },
  {
    "ItemCode": "23611306020B",
    "Dscription": "Punta macho M6 [2007 B]",
    "Quantity": 305
  },
  {
    "ItemCode": "2364-000023615600201",
    "Dscription": "Conjunto de la tapa trasera [2007, 2007 PN, 3007, 3007 PN]",
    "Quantity": 4
  },
  {
    "ItemCode": "3074-000023615501000",
    "Dscription": "Herramienta P-2005",
    "Quantity": 10
  },
  {
    "ItemCode": "5181-000014331060174",
    "Dscription": "QUICKSERT AUTOROSCANTE ACERO",
    "Quantity": 20000
  },
  {
    "ItemCode": "602509M0005",
    "Dscription": "TORNILLO CABEZA HEXAGONAL DIN933 LARGO 16MM ROSCA 4MM ACERO INOX",
    "Quantity": 14000
  },
  {
    "ItemCode": "BRHS-610-4.2",
    "Dscription": "Tuerca remachable M6x1.0 medio cuerpo hexagonal",
    "Quantity": 9000
  },
  {
    "ItemCode": "Gran total",
    "Dscription": "",
    "Quantity": 343994
  } ];
  constructor() { }

  ngOnInit(): void {
  }

}
