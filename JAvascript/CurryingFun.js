

function add(a,b,c){
    return a+b+c
}

console.log(add(1,2,3))

function CurryAdd(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }

}

let addA=CurryAdd(1);
let addB=addA(2);
let addC=addB(2)
console.log(addC);