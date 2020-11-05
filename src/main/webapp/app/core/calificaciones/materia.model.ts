export interface IMateria {
  carrerasIdCarreras?: any;
  idMateria?: any;
  nombre?: string;
  inicioInscripcion?: Date;
  finInscripcion?: Date;
  planIdPlan?: any;
  formaAprobacionIdformaAprobacion?: any;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Materia implements IMateria {
  constructor(
    public carrerasIdCarreras?: any,
    public idMateria?: any,
    public nombre?: string,
    public inicioInscripcion?: Date,
    public finInscripcion?: Date,
    public planIdPlan?: any,
    public formaAprobacionIdformaAprobacion?: any,
    public createdAt?: Date,
    public updatedAt?: Date
  ) {}
}
