/* function display(num) {
    /*  console.log(result);
     result.value +=num
    }
    
    function allclr() {
        result.value = ""
    }
    
    
    function equal() {
        result.value=eval(result.value)
        
    }
    function back() {
        result.value = result.value.slice(0, -1)
    } */

    function display(num){
        result.value +=num
        console.log(result);
    }

    function allclr(){
        result.value=""
    }

    function back(){
        result.value=result.value.slice(0,-1)
    }

    function equal(){
        try{
       result.value=eval(result.value)
        }
        catch{
            result.value="error"
            setTimeout(()=>{
                result.value =""
            },1000)
        }
    }