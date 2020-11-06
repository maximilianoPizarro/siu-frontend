import { Estudiante } from '../estudiante/estudiante.model';

export interface IMateriaAlumnoExamen {
  datosAlumno?: Estudiante;
  idInscriptosExamen?: any;
  examenesidExamenes?: any;
  nota?: any;
  recordatorio?: any;
}

export class MateriaAlumnoExamen implements IMateriaAlumnoExamen {
  constructor(
    public datosAlumno?: Estudiante,
    public idInscriptosExamen?: any,
    public examenesidExamenes?: any,
    public nota?: any,
    public recordatorio?: any
  ) {}
}
