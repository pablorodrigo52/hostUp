class UpDownFlag {
    constructor (flag){
        this.flag = flag;
        this.url = "";
        this.change = false;
    }

    getFlag = function (){
        return this.flag;
    }

    setFlag = function(f){
        this.flag = f;
    }

    getURL = function (){
        return this.url;
    }

    setURL = function(u){
        this.url = u;
    }

    getChange = function (){
        return this.change;
    }

    setChange = function(c){
        this.change = c;
    }
}

export default UpDownFlag