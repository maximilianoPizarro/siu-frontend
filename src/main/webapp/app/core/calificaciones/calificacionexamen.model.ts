export interface ICalificarExamen {
  idDocente?: any;
  idMateria?: any;
  asistencia?: any;
  nota?: any;
  examenesidExamenes?: any;
  idInscriptosExamen?: any;
  recordatorio?: any;
}

export class CalificarExamen implements ICalificarExamen {
  constructor(
    public idDocente?: any,
    public idMateria?: any,
    public asistencia?: any,
    public nota?: any,
    public examenesidExamenes?: any,
    public idInscriptosExamen?: any,
    public recordatorio?: any
  ) {}
}
