let bar=document.getElementById("bar");
let flg=false;
bar.addEventListener("click",()=>{
if(flg===true)
{
    document.getElementById("header").classList.remove("bar-high");
    flg=false;
}
else
{
    document.getElementById("header").classList.add("bar-high");
    flg=true;
}
});

let dd=document.getElementById("drop-down");
let ddm=document.getElementById("ddm");
let flag=true;
dd.addEventListener("click",()=>{
   if(flag===true)
   {
    ddm.classList.add("ddshow");
    ddm.classList.remove("ddhide");
    flag=false;
   }
  else{
    ddm.classList.remove("ddshow");
    ddm.classList.add("ddhide");
    flag=true;
    console.log("NO error found");
  }
});



