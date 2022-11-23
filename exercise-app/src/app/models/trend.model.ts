export class Trend {
  constructor(
    public _id: string,
    public url?: string,
    public title?: string,
    public provider?: string,
    public image?: string,
    public createdAt?: Date,
    public body?: string,
    public token?: string
  ) {}
}
