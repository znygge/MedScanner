

export default class Medicine {
  public id: string = (Math.random()*Date.now()).toString();
  public name: string;
  public prep: string;
  public amount: string;
  constructor(name: string, prep: string, amount: string){
    this.name = name;
    this.prep = prep;
    this.amount = amount;
  }
}