window.onload = getready;
function getready(){

    $('#deer').css({"display":"none"});
    $('#lion').css({"display":"none"});
    $('#elephant').css({"display":"none"});
    $('#snake').css({"display":"none"});
    $('#monkey').css({"display":"none"});

    var mytimeout = setTimeout(dothis,5000);
    var mytimeout1 = setTimeout(dothis1,7000);
    var mytimeout2 = setTimeout(dothis2,9000);
    var mytimeout3 = setTimeout(dothis3,11000);
    var mytimeout4 = setTimeout(dothis4,13000);

    function dothis(){
        console.log("this is cool");
    $('#deer').css({"display":"block"});
    
    }
    function dothis1(){
        console.log("this is cool");
        $('#lion').css({"display":"block"});
    
    }
    function dothis2(){
        console.log("this is cool");
        $('#elephant').css({"display":"block"});
    
    }
    function dothis3(){
        console.log("this is cool");
        $('#snake').css({"display":"block"});
    
    }
    function dothis4(){
        console.log("this is cool");
        $('#monkey').css({"display":"block"});
    
    } 
    var lion = document.getElementById("lion");
    var elephant = document.getElementById("elephant");
    var snake = document.getElementById("snake");


    lion.addEventListener("click",jumplion);
    elephant.addEventListener("click",elephantmove);
   /* deer.addEventListener("click",dearjump);*/
    snake.addEventListener("click",snakescroll);


    function jumplion(){
        $('#lion').css({"animation":"eatting-lion 10s ease-in forwards"});
        $('#deer').css({"display":"none"});
        var mytimeouts = setTimeout(dothist,2000);
        var mytimeout3se = setTimeout(dothisti,5000);
        var mytimeoutses = setTimeout(dothistim,7000);
        var mytimeoutse2 = setTimeout(dothistime1,10000);
        function dothist(){
            console.log("this is cool");
            $('#elephant').css({"display":"none"});
        
        }
        function dothisti(){
            console.log("this is cool");
            $('#snake').css({"display":"none"});
        
        }
        function dothistim(){
            console.log("this is cool");
            $('#monkey').css({"display":"none"});
        
        } 
        function dothistime1(){
            $('#lion').css({"animation":"animals-lion 2s ease-in forwards"});
            getready();
        }
        
    }
    function elephantmove(){
        $('#elephant').css({"animation":"elephant-hitting 7s ease-in forwards"});
        $('#deer').css({"display":"none"});
        $('#lion').css({"display":"none"});
        var mytimeout3se = setTimeout(dothisti,1500);
        var mytimeoutses = setTimeout(dothistim,4500);
        var mytimeoutse2 = setTimeout(dothistime1,9000);
        function dothisti(){
            console.log("this is cool");
            $('#snake').css({"transform":"rotatex(90deg)"});
        
        }
        function dothistim(){
            console.log("this is cool");
            $('#monkey').css({"transform":"rotatex(90deg)"});
        
        } 
        function dothistime1(){
            $('#elephant').css({"animation":"animals-elephant 2s ease-in forwards"});
            $('#snake').css({"transform":"none"});
            $('#monkey').css({"transform":"none"});
            getready();
        }
        
    }
    function snakescroll(){
        document.getElementById("scrool").src = "Images/snakescrooll.gif";
        $('#snake').css({"animation":"snake-transformimg  7s ease-in forwards"});
        $('#deer').css({"display":"none"});
        $('#lion').css({"display":"none"});
        $('#elephant').css({"display":"none"});
        $('#monkey').css({"display":"none"});
        var mytimeoutse2 = setTimeout(dothistime1,9000);
        function dothistime1(){
            document.getElementById("scrool").src = "Images/snake.png";
            $('#snake').css({"animation":"animals-snake 2s ease-in forwards"});
            getready();
        }
        
    }


}