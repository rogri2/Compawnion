const Mascota = new mongoose.Schema({
    name: String,
    isDog: Boolean, //si es true es un perro si es falso es un gato
    gendermale: Boolean, //si es true es masculino si es false es una femina
    size: String,
    Adopted:Boolean,//si esta true la mascota sigue en adopcion
    Image:
    {
        data: Buffer,
        contentType: String
    },
});

//tabla para mostrar las adopciones recientes
const Adopted = new mongoose.Schema({
id:String, //id row
id_mascota:String,
Timewhenadopted: {
    type: Date,
    min: moment.utc('2022-02-26')
  }



});




const Test = mongoose.model("test", TestSchema);
module.exports = Test;

