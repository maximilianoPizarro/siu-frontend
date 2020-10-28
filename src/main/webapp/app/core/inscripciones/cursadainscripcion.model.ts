export interface ICursadaIncripcion {
  idEstudiante?: any;
  idMateria?: any;
  recordatorio?: boolean;
  materia?: string;
}

export class CursadaIncripcion implements ICursadaIncripcion {
  constructor(public idEstudiante?: any, public idMateria?: any, public recordatorio?: boolean, public materia?: string) {}
}
