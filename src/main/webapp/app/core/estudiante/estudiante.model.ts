export interface IEstudiante {
  id?: any;
  nombre?: string;
  apellido?: string;
  domicilio?: string;
  email?: string;
  telefono?: string;
}

export class Estudiante implements IEstudiante {
  constructor(
    public id?: any,
    public nombre?: string,
    public apellido?: string,
    public dni?: string,
    public domicilio?: string,
    public email?: string,
    public telefono?: string
  ) {}
}
