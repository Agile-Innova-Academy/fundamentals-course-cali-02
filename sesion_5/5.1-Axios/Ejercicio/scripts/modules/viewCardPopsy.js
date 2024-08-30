export const viewCardPopsy = (contenedorCard, objView) => {
  objView?.forEach((element) => {
    const { id, name, image, description, categorie, price } = element;

    contenedorCard.innerHTML += `    
     <div class="card text-center my-3" style="width: 13rem">
          <img id=${id} data-bs-toggle="modal" data-bs-target="#exampleModal${id}" src=${image} class="card-img-top d-block m-auto w-25" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <button type="button"  class="btn d-block btn-warning" id=${id} data-bs-toggle="modal" data-bs-target="#exampleModal${id}"
              ><i class="bi bi-star text-light"> Details </i></button>
          </div>
        </div>     
     
  
     <div class="modal fade" id="exampleModal${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">${name}</h1>
              <h6>${price}</h6>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
           <img src=${image} class="card-img-top d-block m-auto w-25" alt="..." />
                <p>${description}</p>
                <h6>${categorie}</h6>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div> 
      </div>

 `;
  });

  //   document.getElementById("form").addEventListener("submit", function (e) {
  //     e.preventDefault();
  //     console.log(e);
  //     document.getElementById("exampleModal").innerHTML = `
  //      <!-- Modal -->

  //         <div class="modal-dialog">
  //           <div class="modal-content">
  //             <div class="modal-header">
  //               <h1 class="modal-title fs-5" id="exampleModalLabel">${name}</h1>
  //               <h6>${price}</h6>
  //               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  //             </div>
  //             <div class="modal-body">
  //            <img src=${image} class="card-img-top d-block m-auto w-25" alt="..." />
  //                 <p>${description}</p>
  //                 <h6>${categorie}</h6>
  //             </div>
  //             <div class="modal-footer">
  //               <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
  //             </div>
  //           </div>
  //         </div>

  //     `;
  //   });
};
