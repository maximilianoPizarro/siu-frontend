export interface IMaterias {
  materia?: string;
  curso?: any;
  fecha?: Date;
  horarioInicio?: string;
  nombreProfesor?: string;
  apellidoProfesor?: string;
}

export class Materias implements IMaterias {
  constructor(
    public materia?: string,
    public curso?: any,
    public fecha?: Date,
    public horarioInicio?: string,
    public nombreProfesor?: string,
    public apellidoProfesor?: string
  ) {}
}
