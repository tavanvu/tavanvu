class mobile{
    battery;
    draft;
    inbox;
    outbox;
    status;
    constructor(battery) {
        this.battery = battery
        this.draft = "";
        this.inbox = []
        this.outbox = []
        this.status = true
    }
    checkOnOff(){
        return this.status
    }
    turnOnOff(){
        return this.status = !this.status
    }
    change(){
        this.battery = 100
    }
    compose(mess){
        this.compose = mess
        this.battery--
    }
    sendMess(phone){
        phone.inbox.push(this.draft)
        this.outbox.push(this.draft)
        this.battery--
        this.draft = ""
    }
    getInbox(){
        return this.inbox
    }
    getOutBox(){
        return this.outbox
    }
}
let mobileOfVu = new mobile(12)
let mobileOfNam = new  mobile(10)
function creatNewMessNam(){
    let v = document.getElementById("messOfNam")
    mobileOfNam.compose(v)
        mobileOfNam.sendMess(mobileOfVu)
    document.getElementById("inbox1").innerText = mobileOfNam.inbox;
    document.getElementById("outbox1").innerText = mobileOfNam.outbox;
}
function creatNewMessVu(){
    let v = document.getElementById("messOfVũ").value;
    mobileOfVu.compose(v);
    mobileOfVu.sendMess(mobileOfNam);

    document.getElementById("inbox2").innerText = mobileOfVu.inbox;
    document.getElementById("outbox2").innerText = mobileOfVu.outbox;
}

