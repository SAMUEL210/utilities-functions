//Capitalize First Lettre of a groupe of firtNames
function cfl(firstnames){
    let parts = firstnames.split(" ");
    let newParts = [];
    parts.map((firstname)=>{
        newParts.push(firstname.charAt(0).toUpperCase()+firstname.slice(1,firstname.lenght))
    })
    return newParts.join(" ");
}

console.log(cfl("James jymmy arnord"));
console.log(cfl("james jymmy arnord"));
console.log(cfl("Robert pinezié adamou"));