

class Permission {

static OperationsConst = {
    CREATE:"CREATE",
    READ:"READ",
    UPDATE:"UPDATE",
    DELETE:"DELETE"
};
static RolesConst = {
    OWNER:"OWNER",
    EDITOR:"EDITOR",
    READER:"READER"
};

// private variables
#role;
#operation;

// constructor
constructor(role, operation){
    if(this.constructor.name === "Permission"){
        throw new Error("This class cannot be instantiated");
    }
    this.#role = role;
    this.#operation = operation
}

// function
check(){
    
    const ops = this.#operation.toUpperCase();

    switch(this.#role.toUpperCase()){
        case Permission.RolesConst.OWNER:
            return true;
        case Permission.RolesConst.EDITOR:
            if(ops === Permission.OperationsConst.READ || ops === Permission.OperationsConst.CREATE || ops === Permission.OperationsConst.UPDATE){
                return true;
            }
            return false;
        case Permission.RolesConst.READER:
            if(ops === Permission.OperationsConst.READ){
                return true;
            }
            return false;
        default:
            return false;
            
    }
}
}

class Document extends Permission{
constructor(role, operation, content){
    super(role, operation);
    this.content=content;
}
process(){
    if(this.check() === true){
        return "Allowed";
    }
    else {
        return "Not Allowed";
    } 

}
}

// scenario 1
const d = new Document(Permission.RolesConst.EDITOR, Permission.OperationsConst.UPDATE, "Hello content");
d.process();

//scenario 2
const d1 = new Document(Permission.RolesConst.READER, Permission.OperationsConst.UPDATE, "Hello content");
d.process();

//scenario 3
const d2 = new Document(Permission.RolesConst.OWNER, Permission.OperationsConst.DELETE, "Hello content")
d.process();