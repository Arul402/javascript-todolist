var input=document.querySelector("input")
    var list=document.querySelector("ul")
    function add(){
        var ele=document.createElement("li")
        ele.innerHTML=input.value + " <button onclick='del(event)'>Delete</button>"
        list.append(ele)
    }
    function del(event){
        event.target.parentElement.remove()
    }