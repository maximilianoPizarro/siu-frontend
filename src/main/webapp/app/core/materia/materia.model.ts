import { ICarrera } from '../carrera/carrera.model';
import { IFormaAprobacion } from '../formaaprobacion/formaaprobacion.model';
import { IPlan } from '../plan/plan.model';

export interface IMateria {
  idMaterias?: any;
  nombre?: string;
  inicioInscripcion?: Date;
  finInscripcion?: Date;
  CarrerasIdCarreras?: any;
  planIdPlan?: any;
  formaAprobacionIdformaAprobacion?: any;
  carreras?: ICarrera;
  formaaprobacion?: IFormaAprobacion;
  plan?: IPlan;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Materia implements IMateria {
  constructor(
    public idMaterias?: any,
    public nombre?: string,
    public inicioInscripcion?: Date,
    public finInscripcion?: Date,
    public CarrerasIdCarreras?: any,
    public carreras?: ICarrera,
    public planIdPlan?: any,
    public plan?: IPlan,
    public formaAprobacionIdformaAprobacion?: any,
    public formaaprobacion?: IFormaAprobacion,
    public createdAt?: Date,
    public updatedAt?: Date
  ) {}
}
