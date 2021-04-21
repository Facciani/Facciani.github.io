//let dati = new Info();
var nome="";
var cognome="";
var giorno="";
var mese="";
var anno="";
var prom="";
var bool="";
var run="";
var chiave="";
var bit="";

function elabora()
{
    alert(cognome+nome+giorno+document.getElementById("mese").value+anno)
}

function verCognome()
{
    var cogn="";
    cogn=document.getElementById("cognome").value;
    if(cogn == "" || !isNaN(cogn))
    {
        alert("Inserire un cognome valido");
        document.getElementById("cognome").value="";
    }else
    {
        if(cogn == cogn.toUpperCase())
        {
            cognome = cogn;
            /*dati.cognome=cogn;
            alert(dati.cognome);*/
        }else{
            alert("Inserire il cognome fatto di sole maiuscole");
            document.getElementById("cognome").value="";
        }
    }
}

function verNome()
{
    var nom="";
    nom=document.getElementById("nome").value;
    if(nom == "" || !isNaN(nom))
    {
        alert("Inserire un nome valido");
        document.getElementById("nome").value="";
    }else
    {
        if(nom == nom.toUpperCase())
        {
            nome = nom;
            //alert(dati.cognome);
        }else{
            alert("Inserire il nome fatto di sole maiuscole");
            document.getElementById("nom").value="";
        }
    }
}

function verGiorno()
{
    var gio=""
    gio = document.getElementById("giorno").value;
    if(gio==""||gio==0 || gio>31)
    {
        alert("Inserire una data coretta");
    }else{
        giorno=gio;
    }
}

function verAnno()
{
    var ann=""
    ann = document.getElementById("anno").value;
    if(ann==""||ann==0)
    {
        alert("Inserire un anno coretto");
    }else{
        anno=ann;
    }
}

/*class Info {
    constructor() {
      this.nome="";
      this.cognome="1";
      this.giorno="";
      this.mese="";
      this.anno="";
      this.prom="";
      this.bool="";
      this.run="";
      this.chiave="";
      this.bit="";
    }
}*/
