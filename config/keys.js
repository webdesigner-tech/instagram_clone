// module.exports={
//     MONGOURI:"mongodb+srv://aakash:GnhVisxAxvzLA6L6@cluster0.nhw6x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
//      JWT_SECRET:"effegwegwrgrgw4"
// }


if(process.env.NODE_ENV==='production'){
    module.exports = require('./prod')
}else{
    module.exports = require('./dev')
}