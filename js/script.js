const affiche=document.getElementById('groupe');
const input=document.getElementById('mots');
const API='./js/database.json';
let EDM=[];


const  getData = async ()=>{

fetch(API)
.then((res) => {
    return res.json();
})
.then((prog) => {
    let query = input.value;
    //console.log("mot: ", query);
    let edm = prog.EDM.filter((evenData)=>{
        if (query===" ") {
          return evenData }
         else if(evenData.quartier.toLowerCase().includes(query.toLowerCase())) {
          return evenData;
        } 
    })
    .map((data) => {
        const {groupe,quartier,programme,link,heures,dates} =data;
        return`
        <div class="col-lg-6">
        <div class="box">
            <div class="job_content-box" >
                <div class="img-box">
                <img src="images/logo.png" alt="">
                </div>
            <div class="detail-box">
          <h5>
            ${groupe}
          </h5>
          <div class="detail-info">
            <h6>
              <span>
                ${dates}
              </span>
            </h6>
            <h6>
              
              <span>
                 ${heures} 
              </span>
            </h6>
          </div>
        </div>          

      </div>        
      <p id="quart" style="font-size:13px; margin-top:15px;">${quartier}
          </p>
      <div class="option-box">
        <a href="${link}" class="apply-btn">
          Savoir plus
        </a>
      </div>
      </div>
      
      </div>
        `
    }).join("")
    affiche.innerHTML=edm;

})

}
getData();
input.addEventListener("input", ()=>{
    getData();
})
function traiter()
        {
        var leTexte = document.getElementById("groupe").innerHTML;
        var termes = document.getElementById("mots").value;

        leTexte = leTexte.split("<span style=\"color:white; background-color:#e41a2b;\">").join("");
        leTexte = leTexte.split("</span>").join("");
       
       

        if(termes!="")
        {
        var expReg = new RegExp(termes, "ig");
        var formeRplcmt = "<span style='color:white; background-color:#e41a2b;'>" + termes +"</span>";
         
        leTexte = leTexte.replace(expReg, formeRplcmt);
        document.getElementById("groupe").innerHTML = leTexte;
       
        
        }
        }
        $(window).on('load', function(){	
          $('.counter').counterUp({
            delay: 10,
            time: 3000
          });	
        });
    







