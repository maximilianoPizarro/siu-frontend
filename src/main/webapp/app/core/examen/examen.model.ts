export interface IExamen {
  idExamenes?: any;
  fecha?: Date;
  horarioInicio?: string;
  horarioFin?: string;
  docenteAsignado?: string;
  inicioInscripcion?: Date;
  finInscripcion?: Date;
  Materias_idMaterias?: any;
  Materias_Carreras_idCarreras?: any;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Examen implements IExamen {
  constructor(
    public idExamenes?: any,
    public fecha?: Date,
    public horarioInicio?: string,
    public horarioFin?: string,
    public docenteAsignado?: string,
    public inicioInscripcion?: Date,
    public finInscripcion?: Date,
    public Materias_idMaterias?: any,
    public Materias_Carreras_idCarreras?: any,
    public createdAt?: Date,
    public updatedAt?: Date
  ) {}
}
