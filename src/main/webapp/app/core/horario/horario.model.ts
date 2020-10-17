import { ICurso } from '../curso/curso.model';

export interface IHorario {
  idHorario?: any;
  dia?: string;
  horarioInicio?: Date;
  horarioFin?: Date;
  CursoIdCurso?: any;
  curso?: ICurso;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Horario implements IHorario {
  constructor(
    public idHorario?: any,
    public dia?: string,
    public horarioInicio?: Date,
    public horarioFin?: Date,
    public CursoIdCurso?: any,
    public curso?: ICurso,
    public createdAt?: Date,
    public updatedAt?: Date
  ) {}
}
