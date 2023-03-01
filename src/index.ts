import PasseioModel from "./model/passeio-model";
import CarroModel from "./model/carro-model";

var chevette = new PasseioModel(1,1986,'KKK-3333','12313213213', 5000, 'GM','Chevette 1.6 Alcool', 'Sedan', 5);
//aqui estou comprando um chevette
chevette.comprar();
//aqui estou dirigindo um chevette
chevette.dirigir();
//aqui estou vendendo um chevette
chevette.vender();

var carro: CarroModel;
carro=chevette;
carro.modelo='Corvete';

carro.dirigir();