
//problem-1

function feetToMile(feet){
    
    if(feet>0){
        var miles=feet/5280;
    }
    else if(feet==0 ){
        miles= 0;
    }
    else{
        miles=" its not possible"
    }
    return miles
}


//problem-two

function woodCalculator(chair,table,bed){

    var totalWood= chair*1 + table*3 + bed*5 ;

    return totalWood;

}

//problem-three

function brickCalculator(n){
    if(n>=21){
            var number1=(n-20)*10*1000;
            var number2=10*15*1000;
            var number3= (n-(n-20)-10)*12*1000;
            result= number1+number2+number3;
        
    }else if(n>=11){
            number1=10*15*1000;
            number2=(n-10)*12*1000;
            result=number1+number2;
    }else{
            number=n*15*1000
            result= number
    }
    return result
}


//problem-four


function tinyFriend(name) {
    let shortLength = Infinity;
    let shortest = "";

    if (name.length > 0) {
        for (let i = 0; i < name.length; i++) {
            if (typeof name[i] == 'string' && name[i].length < shortLength) {
                shortest = name[i];
                shortLength = name[i].length;
            }
        }
    }
    else{
        shortest= 'no value insert';
    }

    return shortest;
}