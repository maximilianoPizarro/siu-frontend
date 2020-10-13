export interface IFormaAprobacion {
  idFormaAprobacion?: any;
  descripcion?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class FormaAprobacion implements IFormaAprobacion {
  constructor(public idFormaAprobacion?: any, public descripcion?: string, public createdAt?: Date, public updatedAt?: Date) {}
}
