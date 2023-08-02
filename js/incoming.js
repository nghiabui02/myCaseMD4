function loadIncomingForm(){
    document.getElementById('display').innerHTML = `<input type="text" id="userId" placeholder="Your ID"><input type="text" id="nameTrade"  placeholder="Name Trade"><input type="text" id="dateTrade" placeholder="Date">
<input type="text" id="amount" placeholder="amount"><input type="text" id="type" placeholder="type"><input type="text" id="tradeTypeId" placeholder="Type Trade">
<button onclick="save()">Save</button> <button onclick="loadRegisterForm()">test</button>`
}
function save(){
    let data = {
        userId: document.getElementById('userId').value,
        nameTrade: document.getElementById('nameTrade').value,
        dateTrade: document.getElementById('dateTrade').value,
        amount: document.getElementById('amount').value,
        type: document.getElementById('type').value,
        tradeTypeId: document.getElementById('tradeTypeId').value,
    }
    axios.post('').then((res)=>{
        axios.get('').then((res)=>{
            loadHome()
        })
    })
}
function loadHome(){

}