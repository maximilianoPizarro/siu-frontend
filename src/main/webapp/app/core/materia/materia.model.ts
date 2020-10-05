export interface IMateria {
  idMaterias?: any;
  nombre?: string;
  inicioInscripcion?: Date;
  finInscripcion?: Date;
  Carreras_idCarreras?: any;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Materia implements IMateria {
  constructor(
    public idMaterias?: any,
    public nombre?: string,
    public inicioInscripcion?: Date,
    public finInscripcion?: Date,
    public Carreras_idCarreras?: any,
    public createdAt?: Date,
    public updatedAt?: Date
  ) {}
}
