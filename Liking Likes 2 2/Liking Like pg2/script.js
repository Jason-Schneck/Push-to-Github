function incrementButton(){
    var element = document.getElementById('incrementText');
    var value = element.innerHTML;

    ++value;

    console.log(value);
    document.getElementById('incrementText').innerHTML = value ;
    document.getElementById('incrementText2').innerHTML = value ;

}


