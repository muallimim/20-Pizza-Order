document.getElementById('beverage').addEventListener('change', beverage_clicked);

function beverage_clicked(){
    event.preventDefault();
    
    if(document.getElementById('beverage').checked){
        console.log('checked');
    }
    else{
        console.log('not checked');
    }
}