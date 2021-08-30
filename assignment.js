//Problem-1

function seerToMon(seers){
    //error input  checking
    if(typeof seers=="string"){
        console.log("Please Enter a positive Number")
    }
    else if( seers<0){
        console.log("Please Enter a positive Number")

    }
    
    else{
        let mons=seers/40;
        return mons;
    }

 
    


}
var result=seerToMon(120.78);
console.log(result);


//Problem-2
function totalSales(shirts_quantity, pants_quantity,shoes_quantity ){

    //error input  checking
    if(typeof shirts_quantity=="string"|| typeof pants_quantity=="string"||typeof shoes_quantity=="string"){
        console.log("Please Enter positive Numbers for all the quantities");
    }
    else if(shirts_quantity<0||pants_quantity<0||shoes_quantity<0){
        console.log("Please Enter positive Numbers for all the quantities");

    }
    else if(shirts_quantity==0 && pants_quantity==0 &&shoes_quantity==0){
        console.log("You didn't enter any quantities");

    }
    
    else{
        //calculating delivery cost

        let shirtPrice=100*shirts_quantity;
        let pantPrice=200* pants_quantity;
        let shoesPrice=500*shoes_quantity;

        let totalSales=shirtPrice+pantPrice+shoesPrice;
        return totalSales;
    }
    
}

var total=totalSales(3,3,5);
console.log(total);


//problem-3

function deliveryCost(tShirt_quantity){
     //error input  checking
    if(typeof tShirt_quantity=="string"){
        console.log("Please Enter a positive Number");
    }
    else if( tShirt_quantity<0){
        console.log("Please Enter a positive Number");

    }
    else if(tShirt_quantity==0){
        console.log("Please Enter a Quantity");
    }
    
    else{

        //calculating delivery cost
        let Cost;

        if(tShirt_quantity<=100){
            Cost=100*tShirt_quantity;
        }
        else if(tShirt_quantity>100 && tShirt_quantity<=200 ){
            Cost= 100*100+80*(tShirt_quantity-100);
        }
        else{
        Cost= 100*100+80*100+(tShirt_quantity-200)*50;

        }

        return Cost;

    }
    
    
    

}

var total=deliveryCost(215);
console.log(total);

//Problem-4

function perfectFriend(friendNames){


    //error checking
    if(typeof friendNames=="string" || typeof friendNames=="number"){
        console.log("Please Enter a Array");
    }
    //Finding the desired name 
    var friend;
    for(var i=0; i<friendNames.length;i ++ ){
        if(friendNames[i].length==5){
            friend=friendNames[i];
            break;
        }
    }

return friend;

}

var friends=["safi","Fatema","Musaffa","Sadia", "Anika"];
var desired_name=perfectFriend(friends);
console.log(desired_name);