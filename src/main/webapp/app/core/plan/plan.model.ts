export interface IPlan {
  idPlan?: any;
  descripcion?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Plan implements IPlan {
  constructor(public idPlan?: any, public descripcion?: string, public createdAt?: Date, public updatedAt?: Date) {}
}
