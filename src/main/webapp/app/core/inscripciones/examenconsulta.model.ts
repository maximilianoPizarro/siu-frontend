export interface IExamenConsulta {
  idInscriptosExamen?: any;
  idMaterias?: any;
  nombre?: string;
  inicioInscripcion?: Date;
  finInscripcion?: Date;
}

export class ExamenConsulta implements IExamenConsulta {
  constructor(
    public idInscriptosExamen?: any,
    public idMaterias?: any,
    public inicioInscripcion?: Date,
    public finInscripcion?: Date,
    public nombre?: string
  ) {}
}
