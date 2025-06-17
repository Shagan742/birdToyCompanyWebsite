document.addEventListener('DOMContentLoaded', ()=> {
    const grid=document.getElementById('rosterGrid')
    const render= list => {
        grid.innerHTML=''
        list.forEach((item, i) => {
            const col = document.createElement('div')
            const j = 0;
            col.className='col-md-4 col-sm-12 d-flex justify-content-center my-5'
            col.innerHTML=`
            <div class="card h-100 mx-5" style="width:210px;">
                    <img src="${item.photo}" alt="${item.productName}" class="card-img-top">
                    <div class="card-body text-center">
                        <h5 class="card-title mb-4">${item.productName}</h5>
                       <p class="small mb-3">${item.productDescription}</p>
<!-- Button trigger modal -->
<button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal${i}">
  More Info
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel${i}" aria-hidden="true">
  <div class="modal-dialog" >
    <div class="modal-content">

    <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel${i}">${item.productName}</h1>
      </div>


      <!--modal image carousel thing-->

      <div class="modal-body">
      <div id="carouselExampleIndicators${i}" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators${i}" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators${i}" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators${i}" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators${i}" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators${i}" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators${i}" data-bs-slide-to="5" aria-label="Slide 6"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators${i}" data-bs-slide-to="6" aria-label="Slide 7"></button>

  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="${item.productImg[j]}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${item.productImg[j+1]}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${item.productImg[j+2]}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${item.productImg[j+3]}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${item.productImg[j+4]}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${item.productImg[j+5]}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${item.productImg[j+6]}" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators${i}" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators${i}" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>






        <p class="hiddenFact">Price: $${item.productPrice}</p>   
       <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>



                    </div>
                </div>
            `

            grid.appendChild(col)

            
        })


    }




render(items)
})

