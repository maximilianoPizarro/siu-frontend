export interface ITraerMateria {
  idDocente?: any;
  idMateria?: any;
}

export interface ICalificarExamen {
  idDocente?: any;
  idMateria?: any;
  asistencia?: any;
  nota?: any;
  examenesidExamenes?: any;
  idInscriptosExamen?: any;
  recordatorio?: any;
}

export interface ICalificarCursada {
  idDocente?: any;
  idMateria?: any;
  idalumnosCursada?: any;
  materiasIdMaterias?: any;
  notaCursada?: any;
  recordatorio?: any;
}

export class Calificacion implements ITraerMateria, ICalificarCursada, ICalificarExamen {
  constructor(public idDocente?: any, public idMateria?: any) {}
}
