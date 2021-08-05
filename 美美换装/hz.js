var yfObj=document.querySelectorAll("#robe div")
yfObj.forEach(function(item,index){
    item.onclick=function(){
        var zd=item.className
        modelObj=document.querySelector(`#model .${zd}`)
        var temp=item.innerHTML
        item.innerHTML=modelObj.innerHTML
        modelObj.innerHTML=temp
        tfObj=document.querySelectorAll("#robe div")
  }
})
var ulli=document.querySelectorAll("ul li")
        var olli=document.querySelectorAll("ol li")
        ulli.forEach(function(item,index){
            item.onclick=function(){
                document.querySelector("ul li.active").removeAttribute("class")
                document.querySelector("ol li.active").removeAttribute("class")
                this.setAttribute("class","active")
                olli[index].setAttribute("class","active")
                document.querySelectorAll("ul li").style.visibility="hidden"
                olli[index].style.visibility="visible" 
            }
        })