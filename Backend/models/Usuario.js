const Usuario = new mongoose.Schema({
    ID_user: String,
    name: String,
    user: String,
    pass: String,
    BIO: String,
    Image:
    {
        data: Buffer,
        contentType: String
    },
    type:String //se asigna el tipo de usuario A , N o M
    

   
   
});

//tabla de tipo de usuarios
const User_Type = new mongoose.Schema({
    id: {//id de la tabla (de tipo A "admin" , "N" normal , "M" moderador)
        type: String
    },
    Descripcion:String ,//se crean 3 rows una para cada tipo
    active:Boolean, //si sigue activo, (nomas es para que el admin quite la opcion si quiere o no)
    
    
});

//tabla de registros de quien sigue a quien
const FollowUp = new mongoose.Schema({
    id: {//id de la tabla
        type: String
    },
    StillFollowing: Boolean, //checar si todavia sigue al usuario (true) y como es dinamico se puede cambiar a false si se deja de seguir, pero el registro se mantine
    id_User: {//usuario que da follows al sig id
        type: String
    },
    id_UserFollow: { //id del usuario al que se le dio follow por parte de tal usuario
        type: String
    },
    
});

//tabla para registro de usuarios que adoptaron
const UserAdopt = new mongoose.Schema({
id:String,
telefono:String,
direccion:String,
pitch:String, //razon por la que este usuario quiere adoptar para ser evaluado

//foreigns keys
id_user:String , //id del usuario para adquirir correo electronico y datos de usuario (nombre tambien)
Status_Adoption:Boolean, //checa el status del registro para saber si fue aceptado o si sigue en espera (A , N, X)

});

//tabla para status de adopcion
const Adoption_Status = new mongoose.Schema({
    id:String,//id de la tabla (de tipo A "aceptado" , "N" negado , "X" en espera)
    type_name:String,
    active:Boolean, //si sigue activo, (nomas es para que el admin quite la opcion si quiere o no)
    });






const Test = mongoose.model("test", TestSchema);
module.exports = Test;

