

let read=(id)=>{
    return document.getElementById(id).value
 }
 let creat=(id)=>{
     return document.createElement(id);
 }
 let get=(id)=>{
 return document.getElementById(id);
 
 }

function orderfood(){
    let id,url;
    let order1 = get("burger");
    if(order1.checked){
        id="order NO.1 Burger is ready" 
        url="https://media.istockphoto.com/photos/cheeseburger-with-tomato-and-lettuce-on-wooden-board-picture-id1309352410?b=1&k=20&m=1309352410&s=170667a&w=0&h=YduYl7Us5MSrw1EFSCxR9zDRLnEFa_O608NdqhHlSyM="
        order(id,url)
    }


    let order2 = get("doughnuts");
    if(order2.checked){
        id="No.2 doughnuts is ready"
        url="https://www.eatthis.com/wp-content/uploads/sites/4/2019/12/tim-hortons-chocolate-dip-donut.jpg?resize=640,468&quality=82&strip=all"
        order(id,url)
    }


    let order3 = get("sandwich");
    if(order3.checked){
        id="No.3 Sandwich is ready";
        url="https://media.istockphoto.com/photos/tasty-sandwitch-picture-id512492928?b=1&k=20&m=512492928&s=170667a&w=0&h=B0t-js9EQSWY6Ulse1rQwvj3_V3cxzwF9Wlk9KkjDcY="
        order(id,url)
    }


    let order4 = get("dosa");
    if(order4.checked){
        id="Order No.4 Dosa is ready";
        url="https://media.istockphoto.com/photos/south-indian-snacks-masala-dosa-picture-id154919144?b=1&k=20&m=154919144&s=170667a&w=0&h=IiS9VMWFVm3aF3ocJS064ckRc6hlajf88-YJOlnGaFY="
        order(id,url)
    }


    let order5 = get("samosa");
    if(order5.checked){
        id="Order No.5 Samosa is ready";
        url="https://media.istockphoto.com/photos/fresh-delicious-crispy-samosas-with-sauce-on-white-background-top-picture-id1324022296?b=1&k=20&m=1324022296&s=170667a&w=0&h=NgRcZtFrEK27a6uV9qWRg5DMc_6GI0rSSv_Ar4s4REw="
        order(id,url);
    }


    let order6=get("momos");
    if(order6.checked){
        id="Order No.6 Momos is ready"
        url="https://media.istockphoto.com/photos/japanese-dumplings-gyoza-with-pork-meat-and-vegetables-picture-id1133151212?b=1&k=20&m=1133151212&s=170667a&w=0&h=-XPU-BOpOepaVLcVsMuXyZNSml80XlY_KDFKsSWW8ug="
        order(id,url);
    }

    function order(od,url){
        let status ="open";
        let mypromise= new Promise(function(resolve,reject){
            let time = Math.random()*10*1000;
            setTimeout(function(){
                if(status=="open"){
                    resolve(od);
                }
                else{
                    reject ();
                }
            },time)
        })



        mypromise.then(function (od){
            get("container").innerHTML=null;
            let div1 =creat("div")
            div1.id="box"
            let img = creat("img");
            img.src=url;
            // img.style.height="500px"
            // img.style.width="500px"
            let p = creat("p");
            p.innerText=od;
            div1.append(img,p);
          
            get("container").append(div1)
        })
    }



}