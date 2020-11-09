import { Estudiante } from '../estudiante/estudiante.model';

export interface IExamenes {
  idInscriptosExamen?: any;
  ExamenesidExamenes?: any;
  datosAlumno?: Estudiante;
  nota?: any;
  materia?: string;
  carrera?: string;
}

export class Examenes implements IExamenes {
  constructor(
    public idInscriptosExamen?: any,
    public ExamenesidExamenes?: any,
    public datosAlumno?: Estudiante,
    public nota?: any,
    public materia?: string,
    public carrera?: string
  ) {}
}
