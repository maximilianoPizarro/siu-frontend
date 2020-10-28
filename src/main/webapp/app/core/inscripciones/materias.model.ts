export interface ICursadaIncripcion {
  idEstudiante?: any;
  idMateria?: any;
  recordatorio?: boolean;
  materia?: string;
}

export interface IMaterias {
  idMateria?: any;
  materia?: string;
  curso?: any;
  fecha?: Date;
  dia?: string;
  horarioInicio?: string;
  nombreProfesor?: string;
  apellidoProfesor?: string;
}

export class Materias implements IMaterias, ICursadaIncripcion {
  constructor(
    public idMateria?: any,
    public materia?: string,
    public dia?: string,
    public curso?: any,
    public fecha?: Date,
    public horarioInicio?: string,
    public nombreProfesor?: string,
    public apellidoProfesor?: string
  ) {}
}
