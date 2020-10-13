import { IMateria } from '../materia/materia.model';

export interface IExamen {
  idExamenes?: any;
  fecha?: Date;
  horarioInicio?: string;
  horarioFin?: string;
  docenteAsignado?: string;
  inicioInscripcion?: Date;
  finInscripcion?: Date;
  MateriasIdMaterias?: any;
  materias?: any;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Examen implements IExamen {
  constructor(
    public idExamenes?: any,
    public fecha?: Date,
    public horarioInicio?: string,
    public horarioFin?: string,
    public docenteAsignado?: string,
    public inicioInscripcion?: Date,
    public finInscripcion?: Date,
    public MateriasIdMaterias?: any,
    public materias?: IMateria,
    public createdAt?: Date,
    public updatedAt?: Date
  ) {}
}
