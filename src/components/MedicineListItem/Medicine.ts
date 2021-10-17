

export default class Medicine {
  public id: string = (Math.random()*Date.now()).toString();
  public name: string;
  public prep: string;
  public amount: string;
  public moreInfo: string;
  constructor(name: string, prep: string, amount: string, moreInfo?:string){
    this.name = name;
    this.prep = prep;
    this.amount = amount;
    this.moreInfo = moreInfo || "";
  }
}