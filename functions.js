var app = new Vue({
    el: "#app",
    data:{
        message: "api stuff",
        ipn: "",
        mac:"",
        ttl:"",
        option:false,
        dhc:false,
        test:20,
        level:"20%"
    },
    methods:{
      get1: function(){
        this.option = true
        axios.get("http://127.0.0.1:5000/on").then(res=>{
            console.log(res.data)
          if (res.data = "ok"){
              this.message = "online"
              this.option = false
          }else{
              this.message = "offline"
              this.option = false
          }
        })
        // this.option = true
      },
      ubiq: function(){
        axios.get("http://127.0.0.1:5000/ubi").then(res=>{
          this.message = "Ubi disco"
        })
      },
      lan: function(){
        axios.get("http://127.0.0.1:5000/lan").then(res=>{
          this.message = res.data
        })
      },
      ip: function(){
        axios.get("http://127.0.0.1:5000/ip").then(res=>{
          this.message = res.data
        })
      },
      saveip: function(){
        var ip = this.ipn
        axios.post("http://127.0.0.1:5000/saveip","ip"+":"+ip).then(res=>{
          this.message = res.data
          console.log(res.data)
        })
      },
      shark: function(){
          axios.get("http://127.0.0.1:5000/shark").then(res=>{
              this.message = "Shark is starting"
          })
      },
      dhcp: function(){
          this.dhc = true
          axios.get("http://127.0.0.1:5000/dhcp").then(res=>{
              if(res.data = "ok"){
                  this.dhc = false
                  this.message = "ip loaded"
              }else{
                  this.dhc = false
                  this.message = "failed to get ip"
              }
          })
      },
      wifi: function(){
        console.log("called by gewifif")
        axios.get("http://127.0.0.1:5000/wifi").then(res=>{
          this.ttl = res.data
          var fo = res.data
          if (fo===null){
            this.test= 5
            this.level = "0%"
          }
          else if(fo<80){
            this.test = 95
            this.level = "95%"
          }else if (fo<200){
            this.test= 50
            this.level = "50%"
          }else if(fo<800){
            this.test = 35
            this.level = "35%"
          }else{
            this.test = 10
            this.level = "10%"
          }
          console.log(res.data)
        })
      },
      getwifi:function(){
        console.log("called")
        setInterval(this.wifi(),2000)
      }
    },
    created() {
      this.interval = setInterval(() => this.wifi(), 5000);
  }

    
      
})
