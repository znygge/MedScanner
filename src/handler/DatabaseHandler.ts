import Medicine from "@/components/MedicineListItem/Medicine";
import * as Realm from "realm-web";

const MEDCOL = {
  "title": "DOPING_MEDS_AND_SUBSTANCE",
  "properties": {
    "_id": {
      "bsonType": "objectId"
    },
    "med_name": {
      "bsonType": "string"
    },
    "substance_name": {
      "bsonType": "string"
    }
  }
}

export default class DatabaseHandler{
  private app: Realm.App = new Realm.App({ id: "medscanner-howfu" });
  private credentials: Realm.Credentials;
  private mongodb!: globalThis.Realm.Services.MongoDB;
  private medicineDB!: any;
  private jsonHAX:Array<{med_name:string, substance_name:string}> = require("@/assets/doping_meds.json");
  constructor(){
    this.credentials = Realm.Credentials.anonymous();
  }
  public connectToDB():Promise<void>{
    return new Promise((resolve, error)=>{
      try {
        // Authenticate the user
        this.app.logIn(this.credentials).then((user:Realm.User)=>{
          if(user.id === this.app.currentUser?.id){
            this.mongodb = this.app.currentUser.mongoClient("mongodb-atlas");
            this.medicineDB = this.mongodb.db("DOPING_MEDS").collection("DOPING_MEDS_AND_SUBSTANCE");
            this.medicineDB.findOne({
              med_name: "Diamox",
            }).then((res:any)=>{
              console.log(res);
            });
            resolve();
          }
          else 
            error("Failed to log in to DB, diff in users");
        });
        // `App.currentUser` updates to match the logged in user
      } catch(err) {
        error("Failed to log in");
      }
    });
  }
  public getMedData(medName: string): Array<Medicine>{
    return this.dbFetchHax(medName);
    /*return new Promise((resolve, error)=>{
      resolve(new Medicine("","",""));
    })*/
  }

  private dbFetchHax(name:string):Array<Medicine>{
    const meds: Array<Medicine> = [];
    this.jsonHAX.forEach((data)=>{
      if(data.med_name.includes(name)){
        meds.push(new Medicine(data.med_name,data.substance_name, "",""));
      }
    })
    return meds;
  }
}