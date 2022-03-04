var configValues=require("./config");
module.exports={
    getDbConnectionString:function(){
        return "mongodb+srv://"+configValues.uname+":"+configValues.pwd+"@cluster0.ef5ta.mongodb.net/NodeTodo?retryWrites=true&w=majority"
    }
}