const trabzonspor ={
    name:"Trabzonspor",
    stadium:"Papara Park stadyumu",
    from:"Trabzon",
    skor:0,
    goal:1,
    gol:function(target){
        this.skor = this.skor + this.goal;
            console.log(this.name,"goooollll",this.skor,target.skor);
        if(setTimeout(() => {
                console.log(this.name,this.skor,target.skor,target.name," Maç sonucu");
            }, 10000)){
            }
    }
}

const barcelona ={
    name:"Barcelona",
    stadium:"Camp Nou",
    from:"Spain",
    skor:0,
    goal:1,
    gol:function(target){
        this.skor = this.skor + this.goal;
            console.log(this.name,"goooollll",target.skor,this.skor);
            if(setTimeout(() => {
                console.log(target.name,target.skor,this.skor,this.name," Maç sonucu");
            }, 10000)){
            }
    }
}
trabzonspor.gol(barcelona);
trabzonspor.gol(barcelona);
trabzonspor.gol(barcelona);
trabzonspor.gol(barcelona);
trabzonspor.gol(barcelona);
trabzonspor.gol(barcelona);
barcelona.gol(trabzonspor);