var app = new Vue({
    el: '#app',
    data: {
      message:{
        titulo:null,
        texto:null,
      },
      resultado:null,
    },
    created: function (){this.recibir()}
    ,methods:{
        envio(){axios.post("http://localhost:4000/inicio",body= this.message).then((result) => {
            console.log(result.data);})},
        recibir(){ axios.get("http://localhost:4000/inicio")
        .then((result) => {this.resultado = result.data,console.log(this.resultado)})}

    }
  })