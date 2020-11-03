export interface ICursadaConsulta {
  idalumnosCursada?: any;
  idMaterias?: any;
  nombre?: string;
  inicioInscripcion?: Date;
  finInscripcion?: Date;
}

export class CursadaConsulta implements ICursadaConsulta {
  constructor(
    public idalumnosCursada?: any,
    public idMaterias?: any,
    public inicioInscripcion?: Date,
    public finInscripcion?: Date,
    public nombre?: string
  ) {}
}
