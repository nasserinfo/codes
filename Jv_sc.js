
   var editeur=document.getElementById("editor");
   var executer=document.getElementById("executer");
   var effacer=document.getElementById("effacer");
   var result=document.getElementById("result");

   executer.onclick=()=>{
   result.innerHTML=editor.value;
   localStorage.setItem("codes",editor.value)
   }
   effacer.onclick=()=>{
    result.innerHTML=" ";
    }
    onload=()=>{
        editeur.value=localStorage.getItem("codes");
    }