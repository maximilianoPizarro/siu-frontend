export interface IExamenIncripcion {
  idEstudiante?: any;
  idExamen?: any;
  recordatorio?: boolean;
  materia?: string;
}

export class ExamenIncripcion implements IExamenIncripcion {
  constructor(public idEstudiante?: any, public idExamen?: any, public recordatorio?: boolean, public materia?: string) {}
}
