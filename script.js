document.addEventListener('DOMContentLoaded', ()=> {
    const grid=document.getElementById('rosterGrid')
    const render= list => {
        grid.innerHTML=''
        list.forEach((item, i) => {
            const col = document.createElement('div')
            col.className='col-md-4 col-sm-12 d-flex justify-content-center my-5'
            col.innerHTML=`
            <div class="card h-100" style="width:210px;">
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

      <div class="modal-body">
      <img class="bigImg" style="width:300px; height:300px;" src="${item.productImg[i]}">
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