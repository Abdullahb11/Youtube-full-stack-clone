console.log("sdas");

function maxx( a, b)
{
if(a<b)
    return b;
return a;
}

//1,-2,2,3,-2,5,5,-4,1
//7
const a=[79,-2,2,-3,-2,1,-5,-4,1,100];
let max=a[0];
let curmax=a[0];
let start=0;
let end=0;
let s=0;
for(let i=1;i<10;i++)
{
    if(a[i]+curmax<a[i])
        start=i;
    curmax=maxx(a[i],a[i]+curmax);

    if(curmax>max)
    {
         max=curmax;
        s=start;
         end=i;
    }
}
console.log(max);
let output = '';
for(let i = s; i <= end; i++) {
    output += a[i] + ' '; // Concatenate each element followed by a space
}
console.log(output.trim()); //
