var Todos=require("../models/todoModel");
module.exports=function(app){
app.get("/api/setupTodos",function(req,res){
    var starterTodos=[
        {
     username:"Mario",
    todo:"Eat lunch",
    isDone: false,
    hasAttachement:false

        },
        {
            username:"Karl",
           todo:"Go to college",
           isDone: true,
           hasAttachement:true
       
               }

    ];
    Todos.create(starterTodos,function(err,results){
        res.send(results);
    })
})
}
