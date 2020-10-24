import { User } from '../user/user.model';

export interface IProfesor {
  id?: any;
  nombre?: string;
  apellido?: string;
  dni?: string;
  domicilio?: string;
  titulo?: string;
  telefono?: string;
  user?: User;
}

export interface IProfesorCreate {
  nombre?: string;
  apellido?: string;
  dni?: string;
  domicilio?: string;
  titulo?: string;
  telefono?: string;
  user?: User;
}

export class Profesor implements IProfesor, IProfesorCreate {
  constructor(
    public id?: any,
    public nombre?: string,
    public apellido?: string,
    public dni?: string,
    public domicilio?: string,
    public titulo?: string,
    public telefono?: string,
    public user?: User
  ) {}
}
