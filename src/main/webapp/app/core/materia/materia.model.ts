import { ICarrera } from '../carrera/carrera.model';

export interface IMateria {
  idMaterias?: any;
  nombre?: string;
  inicioInscripcion?: Date;
  finInscripcion?: Date;
  Carreras_idCarreras?: any;
  carrera?: ICarrera;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Materia implements IMateria {
  constructor(
    public idMaterias?: any,
    public nombre?: string,
    public inicioInscripcion?: Date,
    public finInscripcion?: Date,
    public Carreras_idCarreras?: any,
    public carrera?: ICarrera,
    public createdAt?: Date,
    public updatedAt?: Date
  ) {}
}
