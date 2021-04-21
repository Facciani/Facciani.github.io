//let dati = new Info();
var nome="";
var cognome="";
var giorno="";
var anno="";
var cont=0;

function elabora()
{
    var selectDaVerificare = document.getElementById("mese");
    var indiceSelezionato = selectDaVerificare.selectedIndex;
    var valoreSelezionato = selectDaVerificare.options[indiceSelezionato];
    var valoreDentroLopzione = valoreSelezionato.value;
    if(nome==""|| cognome==""|| giorno=="" || anno=="")
    {
        //alert("Dati anagrafici incompleti");
    }else{
        if(document.getElementById("linguaggio").value=="SQL" || document.getElementById("linguaggio").value=="Structured Query Language")
        {
            cont++;
        }
        if(document.getElementById("bool").selectedIndex==1)
        {
            cont++;
        }
        if(document.getElementById("dinamica").checked)
        {
            cont++;
        }
        if(document.getElementById("void").checked && document.getElementById("char").checked)
        {
            cont++;
        }
        if(document.getElementById("bit").value==1 || document.getElementById("bit").value=="1 byte")
        {
            cont++
        }
        document.getElementById("esito").value=cont;
    }
    var punteggio = cognome.substr(0,3) + nome.substr(0,3) + valoreDentroLopzione + anno.substr(0,2) + cont*10;
    document.getElementById("punteggio").value=punteggio;
}

function verCognome()
{
    var cogn="";
    cogn=document.getElementById("cognome").value;
    if(cogn == "" || cogn.length < 3 || !isNaN(cogn))
    {
        alert("Inserire un cognome valido o lungo più di tre lettere");
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
    if(nom == "" || nom.length < 3 || !isNaN(nom))
    {
        alert("Inserire un nome valido o lungo più di tre lettere");
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
