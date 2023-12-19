let output = document.getElementById("output")

function display(num){
    output.value += num
}
function Clear(){
    output.value = ""
}
function del(){
    output.value = output.value.slice(0,-1)
}
function Calculate(){
    try{
        output.value = eval(output.value)
    }
    catch(err)
    {
        output.value = "Invalid"
    }
}