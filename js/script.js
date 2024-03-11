
// let EDM=[];
let test=[];
fetch(
    './js/database.json'
)
.then((res) => {
    return res.json();
})
.then((prog) => {

          test = prog.EDM.filter((data) => {
            let b = data;
           
            // console.log(b);
        
    // EDM = prog.EDM.map((prog) => {

    //     const code = {
    //         groupe: prog.groupe,
    //         quartier:prog.quartier,
    //         programme: prog.programme,
    //     };
    //    console.log(code);



    })

})






