import { Estudiante } from '../estudiante/estudiante.model';

export interface IMateriaAlumno {
  datosAlumno?: Estudiante;
  idalumnosCursada?: any;
  materiasIdMaterias?: any;
  notaCursada?: any;
  recordatorio?: any;
  planIdPlan?: any;
}

export class MateriaAlumno implements IMateriaAlumno {
  constructor(
    public datosAlumno?: Estudiante,
    public idalumnosCursada?: any,
    public materiasIdMaterias?: any,
    public notaCursada?: any,
    public recordatorio?: any,
    public planIdPlan?: any
  ) {}
}
