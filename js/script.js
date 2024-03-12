const affiche=document.getElementById('groupe');
const input=document.getElementById('textValue');
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
        if (query===" ") {return evenData }
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
            <img src="images/edm.jpeg" alt="">
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







