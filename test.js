const test = {
    question1:"İstanbul kaç yılında fethedildi?",
    question2:"Kanan kırmızı rengini veren madde nedir?",
    question3:"5x5=?",
    question4:"Türkiyenin kuzeyinde hangi bölge bulunmaktadır?",
    question5:"61 hangi şehrin plaka kodudur?",
    test1:function(question1){
        x = prompt(test.question1);
        if(1453 == x){
            console.log("Doğru");
        }else{
            console.log("Yanıldın");
        }
    },
    test2:function(question2){
        x = prompt(test.question2);
        y = String("vişne suyu");
        if(y==x){
            console.log("Doğru");
        }else{
            console.log("Yanıldın");
        }
    },
    test3:function(question3){
        x = prompt(test.question3);
        if(25==x){
            console.log("Doğru");
        }else{
            console.log("Yanıldın");
        }
    },
    test4:function(question4){
        x = prompt(test.question4);
        y = String("Trabzon")
        if(x=y){
            console.log("Doğru bildin (yersen)");
        }else{
            console.log("Yanıldın");
        }
    },
    test5:function(question5){
        x = prompt(test.question5);
        y = "Trabzon";
        if(x=y){
            console.log("Tabi uşağum");
        }else{
            console.log("Yazıklar olsun");
        }
    },
}
