const ankarapower = {
    baskan:"Faruk KOCA",
    stadium:"Eryaman STADYUMU",
    from:"Ankara",
    skor:0,
    goal:1,
    headpower:100,
    gol:function(target){
        this.skor = this.skor+this.goal;
            console.log(this.name,"goooollll",this.skor,target.skor);
                if(setTimeout(() => {
                    console.log(this.name,this.skor,target.skor,target.name," Maç sonucu");
            }, 10000)){
        }
    },
    attack:function(target){
        this.baskan=this.headpower;
            target.hp = target.hp-this.baskan;
            if(target.hp <= 0){
                target.live= false;
                console.log("Maç iptal beyler");
            }
    },
};
const Halil = {
    name:"Halil Umut MELER",
    from:"İzmir nonnisi",
    hp:60,
    live:true,
};
const Rize = {
    baskan:"İbrahim TURGUT",
    stadium:"Çaykur Didi Stadyumu",
    from:"Rize",
    skor:0,
    goal:1,
    gol:function(target){
        this.skor = this.skor+this.goal;
            console.log(this.name,"goooollll",this.skor,target.skor);
                if(setTimeout(() => {
                    console.log(this.name,this.skor,target.skor,target.name," Maç sonucu");
            }, 10000)){
        }
    },
};