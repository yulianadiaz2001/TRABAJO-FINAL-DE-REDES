const express=require ("express")
const path=require ("path")
const app=express();
app.set("port",4000)
app.use(express.static(path.join(__dirname,"public")))
app.use(express.json())
app.use("/inicio",require("./rutas/servi2"))
app.delete("/borrar",(req,res)=>{res.json({mensaje:"borrado"})})

app.listen(app.get("port"),console.log("servidor corriendo puerto 4000"))
