var array_sesso = ["M","F"];
var array_regioni = ["Valle d'Aosta", "Piemonte", "Liguria", "Lombardia", "Trentino-Alto Adige" , "Veneto", "Friuli-Venezia Giulia", "Emilia Romagna", "Toscana", "Umbria", "Marche", "Lazio", "Abruzzo", "Molise", "Campania", "Puglia", "Basilicata", "Calabria", "Sicilia", "Sardegna"]
var array_occhi = ["Neri","Marroni","Verdi","Azzurri","Rossi"];
var array_mesi = ["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novemvre","Dicembre"];
var contrS = true;
var contrR1 = true;
var contrR2 = true;
var occhi = true;
var mese = true;
function sesso()
{
    if(contrS==true)
    {
        for( sex in array_sesso ) {
            document.getElementById("sesso").add( new Option( array_sesso[sex] ) ); 
        };
        contrS=false;
    }
}
function regioni(e)
{
    if(contrR1==true)
    {
        if(e==1)
        {
            for( reg in array_regioni ) {
                document.getElementById("regione1").add( new Option( array_regioni[reg] ) ); 
            };
            contrR1=false;
        }
    }
    if(contrR2==true)
    {
        if(e==2)
        {
            for( reg in array_regioni ) {
                document.getElementById("regione2").add( new Option( array_regioni[reg] ) ); 
            };
            contrR2=false;
        }
    }
}

function occhio()
{
    if(occhi==true)
    {
        for( occ in array_occhi ) {
            document.getElementById("occhi").add( new Option( array_occhi[occ] ) ); 
        };
        occhi=false;
    }
}

function mese1()
{
    if(mese==true)
    {
        for( mes in array_mesi ) {
            document.getElementById("mese").add( new Option( array_mesi[mes] ) ); 
        };
        mese=false;
    }
}