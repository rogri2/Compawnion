const Post = new mongoose.Schema({
    ID_post: String,
    Tittle:String,
    BIO: String,
    ID_Mascota : String, //info de la mascota 
    ID_userPost: String, //usuario que hace el post (se supone que aqui se pone)
    
});

//tabla "  " donde se guardan los registros de cada like para filtrar en los usuarios a que post le diste like
const Paws = new mongoose.Schema({
    id: {//id de la tabla
        type: String
    },
    Paw: Boolean, //Checker dinamico de likes, al inicio cuando se crea el row es true, pero si  el usuario quita el like se pone false y ya no se muestra en sus likes, pero puede cambiarse
    id_User: {//usuario que da like(paw) al sig id
        type: String
    },
    id_Paws: { //id del usuario al que se le dio follow por parte de tal usuario
        type: String
    },
    
});


const Test = mongoose.model("test", TestSchema);
module.exports = Test;
