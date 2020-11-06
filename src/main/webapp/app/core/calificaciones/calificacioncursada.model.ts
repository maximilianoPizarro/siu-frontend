export interface ICalificarCursada {
  idDocente?: any;
  idMateria?: any;
  idalumnosCursada?: any;
  materiasIdMaterias?: any;
  notaCursada?: any;
  recordatorio?: any;
}

export class CalificarCursada implements ICalificarCursada {
  constructor(
    public idDocente?: any,
    public idMateria?: any,
    public idalumnosCursada?: any,
    public materiasIdMaterias?: any,
    public notaCursada?: any,
    public recordatorio?: any
  ) {}
}
