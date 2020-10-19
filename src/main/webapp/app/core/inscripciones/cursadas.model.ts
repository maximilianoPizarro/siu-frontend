import { IEstudiante } from '../estudiante/estudiante.model';

export interface ICursadas {
  idalumnosCursada?: any;
  materiasIdMaterias?: any;
  datosAlumno?: IEstudiante;
  notaCursada?: any;
  recordatorio?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Cursadas implements ICursadas {
  constructor(
    public idInscriptosExamen?: any,
    public materiasIdMaterias?: any,
    public datosAlumno?: IEstudiante,
    public nota?: any,
    public asistencia?: boolean,
    public createdAt?: Date,
    public updatedAt?: Date
  ) {}
}
