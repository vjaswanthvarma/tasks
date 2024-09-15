function calculateTotalPrice(){
    addEventListener("submit",function(e){
        e.preventDefault();
        validate();
        function validate(){
var name=document.getElementById("ProductName").value;
var price=parseInt(document.getElementById("price").value);
var qty=parseInt(document.getElementById("qty").value);
document.getElementById("totalprice").value=price*qty;
console.log(price*qty);

return false;}
    })
    return false;
}