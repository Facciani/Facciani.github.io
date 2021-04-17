function calcola()
{
    var altezza=document.getElementById("alt").value;
    var eta=document.getElementById("eta").value;
    var peso=document.getElementById("peso").value;
    if((altezza=="")||(altezza<=67))
    {
        alert("Attenzione: Inserire una altezza maggiore di 67 cm");
    }else if((eta=="")||(eta==0)){
        alert("Attenzaione: Inserire una età maggiore a 0 anni")
    }else{
        if(document.getElementById("sesso").selectedIndex==0)
        {
            var uno=altezza-100-(altezza-150)/4;
            document.getElementById("uno").innerHTML=uno;
            var due=altezza-100;
            document.getElementById("due").innerHTML=due;
            var tre=(altezza-150)*0.75+50;
            document.getElementById("tre").innerHTML=tre;
            if(peso>0)
            {
                var quattro=peso/(altezza*altezza);  
                document.getElementById("quattro").innerHTML=quattro;
            }else{
                alert("Attenzione: Per il BMI inserire prima un peso maggiore a 0 kg")
            }
        }else{
            var uno=altezza-100-(altezza-150)/2;
            document.getElementById("uno").innerHTML=uno;
            var due=altezza-104;
            document.getElementById("due").innerHTML=due;
            var tre=(altezza-150)*0.60+50;
            document.getElementById("tre").innerHTML=tre;
            if(peso>0)
            {
                var quattro=peso/(altezza*altezza);  
                document.getElementById("quattro").innerHTML=quattro;
            }else{
                alert("Attenzione: Per il BMI inserire prima un peso maggiore a 0 kg")
            }
        }
    }
}