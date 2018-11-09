var T=[];var test=true;
// constructeur objet coordonne
function coordonne(a,b){
    this.x=a;
    this.y=b;

}
function stockerCords(e){//console.clear();
if(test){
    var div=document.getElementById("d1");
            /*    Math.max(
            document.documentElement["clientWidth"],
            document.body["scrollWidth"],
            document.documentElement["scrollWidth"],
            document.body["offsetWidth"],
            document.documentElement["offsetWidth"]
        );*/ //question de compatibilite!
    var height = document.body.clientHeight;
    var width = document.body.clientWidth;
    
    var o=new coordonne(e.clientX/width,e.clientY/height);
    div.innerHTML="height"+height+"width "+width+"x:"+o.x+" :y"+o.y;
    T.push(o);
    console.log(T);
}
}
function dessiner(){
    var can=document.getElementById("can");
    var contexte = can.getContext('2d');
    can.className="c1";
    var rect = can.getBoundingClientRect();
    x = rect.left;
    y = rect.top;
    w = rect.width; 
    h = rect.height;
    
 
   console.clear();
        var i=0;
    for(i=0;i<=T.length-2;i++)
    {
        contexte.beginPath();
        contexte.lineWidth = '2';
        contexte.strokeStyle = '#C24';
        contexte.moveTo(T[i].x*w,T[i].y*h);console.log(T[i].y*w);
        contexte.lineTo(T[i+1].x*w,T[i+1].y*h);
     
        contexte.stroke();
    } 
   
} 

function stop(event){
 ///stopper enregistrement quand utilisateur tape sur echap
 var x = event.which || event.keyCode;
 if(x==27){//code echap ou code touche s=115
 test=false;
 }
}