export interface ICarrera {
  idCarreras?: any;
  nombre?: string;
  departamento?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Carrera implements ICarrera {
  constructor(
    public idCarreras?: any,
    public nombre?: string,
    public departamento?: string,
    public createdAt?: Date,
    public updatedAt?: Date
  ) {}
}
