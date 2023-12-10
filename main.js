//Bai 1
// let a=3,b=4,c=8;
// let d=Math.max(a,Math.max(b,c));
// console.log(d);
//Bai 2
// let a=3,b=4,c=8;
// if(a<=0||b<=0||c<=0){
//     console.log("False");
// }
// else if((a+b)<=c||(a+c)<=b||(c+b)<=a){
//     console.log("False");
// }
// else{
//     console.log("True");
// }
//Bai 3
// let str="HTML, CSS, Javascript,";
// let strs=str.split(" ");
// let a=strs[strs.length-1];
// let cnt=0;
// a=a.toLowerCase();
// for(let c of a){
//     if(c.charCodeAt()>=97 && c.charCodeAt()<=122){
//         cnt++;
//     }
// }
// console.log(cnt)
//Bai 4
// let n=123;
// let a=n.toString();
// let b=a.split("").reverse().join("");
// if(a==b){
//     console.log("True");
// }
// else{
//     console.log("False");
// }
//Bai 5
function gcd(a,b){
    if(b==0){
        return a;
    }
    return gcd(b,a%b);
}

function bcnn(a,b){
    return a*b/gcd(a,b);
}
var a=10,b=20;
console.log(gcd(a,b)+", "+ bcnn(a,b));
