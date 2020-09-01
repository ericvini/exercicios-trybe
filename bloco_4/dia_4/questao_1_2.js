

function verificaPalindrome( palavra){
    let str=palavra;
    let strReverse = str.split('').reverse().join(''); 
    
    
    if(str===strReverse){
    
    return true;
    
    }else{
    
    return false;
    
    }
    

}

let res=verificaPalindrome("reviver");
console.log(res);