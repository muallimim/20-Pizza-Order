document.getElementById('beverage').addEventListener('change', beverage_clicked);

function beverage_clicked(){
    event.preventDefault();
    
    if(document.getElementById('beverage').checked){
        console.log('checked');
        document.getElementById('ayran').checked = true;

        document.getElementById('ayran').disabled = false;
        document.getElementById('salgamsuyu').disabled = false;
        document.getElementById('gazoz').disabled = false;

    }
    else{
        console.log('unchecked');
        document.getElementById('ayran').checked = false;
        document.getElementById('salgamsuyu').checked = false;
        document.getElementById('gazoz').checked = false;

        document.getElementById('ayran').disabled = true;
        document.getElementById('salgamsuyu').disabled = true;
        document.getElementById('gazoz').disabled = true;
    }
}

document.getElementById('btn-order').addEventListener('click', btn_order_clicked);

function btn_order_clicked(){
    event.preventDefault();


    var price=0;
    

    if(document.getElementById('mix').checked)
        price = 100;

    if(document.getElementById('vege').checked)
        price = 80;
    ///////////////////////////////////////////

    if(document.getElementById('birbucuk').checked)
        price = price * 1.5;
    
    ////////////   For Beverage   /////////////////

    if(document.getElementById('beverage').checked)
        price = price+10;

        report_text = "Sayın Müşterimiz;<br> siparişinizin tutarı "
         + price  + " ₺ olarak belirlenmiştir."
    
    document.getElementById('report').innerHTML =report_text;

//Sayın Müşterimiz;
//Bir buçuk porsiyon karışık pizza ve şalgam suyu
// siparişiniz alınmış olup ücreti 160 ₺ olarak
// belirlenmiştir.

}


