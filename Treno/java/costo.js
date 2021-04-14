function calcola()
{
    var km=document.getElementById("chilometri").value;
    var costo="";
    if(isNaN(km)||km=="")
    {
        alert("Inserire un numero corretto di chilometri");
    }else{
        if(document.getElementById("r1").checked)
        {
            costo=(0.43*(document.getElementById("persone").selectedIndex+1))*km;
            document.getElementById("risultato").innerHTML=costo;
        }else if(document.getElementById("r2").checked)
        {
            costo=(0.23*(document.getElementById("persone").selectedIndex+1))*km;
            document.getElementById("risultato").innerHTML=costo;
        }else{
            alert("Inserire prima su che classe si vuole viaggiare");
        }
    }
}