import mongodb from "../../utils/mongodb"
import jsondb from "../../jsondb/produkte";
import Produkt from "../../models/Produkt";

export default async function handler(req, res) {
  await mongodb.dbConnect();
  await Produkt.deleteMany();
  await Produkt.insertMany(jsondb.produkte);
  const produkte = await Produkt.find({});
  const prettyProdukte = JSON.stringify(produkte, null, 2);
  await mongodb.dbDisconnect();
  //res.send({ text: 'Daten gespeichert' })
  res.send(prettyProdukte);
}
