import { IMateria } from '../materia/materia.model';
import { IProfesor } from '../profesor/profesor.model';

export interface IExamen {
  idExamenes?: any;
  fecha?: Date;
  horarioInicio?: string;
  horarioFin?: string;
  inicioInscripcion?: Date;
  finInscripcion?: Date;
  MateriasIdMaterias?: any;
  docenteAsignado?: IProfesor;
  acta?: string;
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
    public docenteAsignado?: IProfesor,
    public inicioInscripcion?: Date,
    public finInscripcion?: Date,
    public MateriasIdMaterias?: any,
    public acta?: string,
    public materias?: IMateria,
    public createdAt?: Date,
    public updatedAt?: Date
  ) {}
}
