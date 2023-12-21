const market = {
    tereyag:"tereyag",
    tuz:"tuz",
    yumurta:"yumurta",
    domates:"domates",
    sogan:"sogan",
    biber:"biber",
    ekmek:"ekmek",
    cola:"cola",
    ayran:"ayran"
};
const product = {
    name:"product",
    type:"food",
    materiel: function(target){
     const mat = market.tereyag+" "+market.tuz+" "+market.yumurta+" "+market.domates+" "+market.sogan+" "+market.biber+" ";
        console.log(mat+" Hiç de ucuz değil(siyasi gönderme)");
    }
};
const menemen={
    name:"Menemen",
    type:"Food",
    status:"raw",
    menemen:function(product){
            console.log("Menemen hazır.");
    }
}
const cook={
    name:"Pişirme",
    type:"Food",
    status:"Hot",
    yap:function(target){
        console.log("Tebrik ederim sonunda pişirebildin.")
    }
}

product.materiel();

menemen.menemen(product);

cook.yap(menemen);