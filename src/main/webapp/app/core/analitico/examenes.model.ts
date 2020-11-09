import { Estudiante } from '../estudiante/estudiante.model';

export interface IExamenes {
  idInscriptosExamen?: any;
  ExamenesidExamenes?: any;
  datosAlumno?: Estudiante;
  nota?: any;
  asistencia?: boolean;
  recordatorio?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Examenes implements IExamenes {
  constructor(
    public idInscriptosExamen?: any,
    public ExamenesidExamenes?: any,
    public datosAlumno?: Estudiante,
    public nota?: any,
    public asistencia?: boolean,
    public recordatorio?: boolean,
    public createdAt?: Date,
    public updatedAt?: Date
  ) {}
}
