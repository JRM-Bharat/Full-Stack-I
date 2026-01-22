let balance=1000

const balDisplay=document.getElementById("balance");
const amtInput=document.getElementById("amount");
const message=document.getElementById("message");

const depBtn=document.getElementById("deposit");
const wdrwBtn=document.getElementById("withdraw");

function updateBal(){
    balDisplay.textContent = `Balance: $${balance}`;
}

function getValidAmt(){
    const amt= parseFloat(amtInput.value);

    if(isNaN(amt)||amt<=0){
        message.textContent="Amount Invalid!";
        return null;
    }
    return amt;
}

depBtn.addEventListener("click", ()=>{
    const amt=getValidAmt();
    if(amt==null) return;

    balance += amt;
    updateBal();
    message.textContent="";
    amtInput.value="";
});


wdrwBtn.addEventListener("click", ()=>{
    const amt=getValidAmt();
    if(amt==null) return;

    balance -= amt;
    updateBal();
    message.textContent="";
    amtInput.value="";
});