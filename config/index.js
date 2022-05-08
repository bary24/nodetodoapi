var configValues=require("./config");
module.exports={
    getDbConnectionString:function(){
        return "mongodb+srv://"+process.ENV.uname+":"+process.ENV.pwd+"@<clusterName>.ef5ta.mongodb.net/<DatabaseName>?retryWrites=true&w=majority"
    }
}
