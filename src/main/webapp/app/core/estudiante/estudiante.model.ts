import { IUser } from '../user/user.model';

export interface IEstudiante {
  id?: any;
  nombre?: string;
  apellido?: string;
  domicilio?: string;
  email?: string;
  telefono?: string;
}

export interface IEstudianteCreate {
  nombre?: string;
  apellido?: string;
  domicilio?: string;
  email?: string;
  telefono?: string;
  user?: IUser;
}

export class Estudiante implements IEstudiante, IEstudianteCreate {
  constructor(
    public id?: any,
    public nombre?: string,
    public apellido?: string,
    public dni?: string,
    public domicilio?: string,
    public email?: string,
    public telefono?: string,
    public idCarreras?: any,
    public user?: IUser
  ) {}
}
