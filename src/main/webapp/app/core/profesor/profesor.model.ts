export interface IProfesor {
  id?: any;
  nombre?: string;
  apellido?: string;
  dni?: string;
  domicilio?: string;
  titulo?: string;
  telefono?: string;
}

export class Profesor implements IProfesor {
  constructor(
    public id?: any,
    public nombre?: string,
    public apellido?: string,
    public dni?: string,
    public domicilio?: string,
    public titulo?: string,
    public telefono?: string
  ) {}
}
