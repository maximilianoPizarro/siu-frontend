import { IEstudiante } from '../estudiante/estudiante.model';

export interface IExamenes {
  idInscriptosExamen?: any;
  examenesIdExamenes?: any;
  datosAlumno?: IEstudiante;
  nota?: any;
  asistencia?: boolean;
  recordatorio?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Examenes implements IExamenes {
  constructor(
    public idInscriptosExamen?: any,
    public examenesIdExamenes?: any,
    public datosAlumno?: IEstudiante,
    public nota?: any,
    public asistencia?: boolean,
    public recordatorio?: boolean,
    public createdAt?: Date,
    public updatedAt?: Date
  ) {}
}
