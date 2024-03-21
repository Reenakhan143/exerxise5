// object n array ...types and interfaces
type cosmetictype={
    name:string,
    price:number,
    offer:boolean,
    made_in: string,
    barcode: boolean,
    offer_list: string[],
    shopadress: adresstype,
    };
    interface  adresstype{
        city:string,
        erea : string,
        shopNo: number,
        market_name:string,
    };
    let  myShop :cosmetictype  = {
        name:"dermacose",
        price:1500 ,
        offer:true,
        made_in:  "Greece",
        barcode: false,
        offer_list: ["discount","free shipping"],
        shopadress:{
            city:"karachi",
            erea:   "hyderi",
            shopNo: 234,
            market_name:  "pari mall"
        }

    };
    console.log(myShop.shopadress);
    console.log(myShop.offer_list) ;
    console.log(myShop);









