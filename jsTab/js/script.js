function eleve(a,b,c,d){
    this.nom=a;
    this.prenom=b;
    this.age=c;
    this.note=d;
    this.chaine=function(){return "nom="+ this.nom+" | prenom :"+this.prenom+ " | age :"+this.age +" | note :"+this.note};

}
var y=new eleve("am","kh",45,12);
alert(y.chaine());
 let T=[];
if (!(localStorage.getItem("tabstore") == true || localStorage.getItem("tabstore") == false)) {
      
    localStorage.setItem("tabstore", T);
}else {

      T=(T.length!=0)?JSON.parse(localStorage.getItem("tabstore")):[]; 
}

function afficher(){
    var dbloc=document.getElementById("bloc1");
    dbloc.innerHTML="";
 
    var i=0;
     for(i=0;i<T.length;i++){
         console.log(T);
          var d=document.createElement("div");
        d.innerHTML=T[i].chaine();
        d.className="row";
        d.className+="animated" ;
        d.className+="bounce" ;
        dbloc.appendChild(d);

    }

}
function add(event){
    var n=document.getElementById("n");
    var p=document.getElementById("p");
    var age=document.getElementById("age");
    var note=document.getElementById("note");
    var no=parseFloat(note.value);
    if(no<0||no>20){
        note.className="vibrate";
        note.style.color="red";
        event.preventDefault();
        return;

    }
    var x=new eleve(n.value,p.value,age.value,note.value);
    T.push(x);
    afficher();
  
}
function saveClose(){
    localStorage.setItem("tabstore", T);
    window.top.close();
}
function sort(){
   var compare=(a,b)=>(a.age>b.age)?1:((a.age<b.age)? -1:0);
   T.sort(compare);
   afficher();
}