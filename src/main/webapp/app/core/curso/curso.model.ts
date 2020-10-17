import { IProfesor } from '../profesor/profesor.model';
import { IMateria } from '../materia/materia.model';

export interface ICurso {
  idCurso?: any;
  datosDocente?: IProfesor;
  MateriasIdMaterias?: any;
  materia?: IMateria;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Curso implements ICurso {
  constructor(
    public idCurso?: any,
    public datosDocente?: IProfesor,
    public MateriasIdMaterias?: any,
    public materia?: IMateria,
    public createdAt?: Date,
    public updatedAt?: Date
  ) {}
}
