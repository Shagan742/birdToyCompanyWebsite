document.addEventListener('DOMContentLoaded', ()=> {
    const grid=document.getElementById('rosterGridTwo')
    const render= list => {
        grid.innerHTML=''
        list.forEach((review) => {
            const col = document.createElement('div')
            col.className='col-md-4 col-sm-12 d-flex justify-content-center my-5'
            col.innerHTML=`
            <div class="card h-100" style="width:250px; padding:10px;">
                    <div class="card-body text-center">
                        <h5 class="card-title mb-4">${review.firstName} ${review.lastName}, ${review.age}</h5>
                         <p class="small mb-3">${review.numberOfStars}</p>                       
                        <p class="small mb-3">${review.theirReview}</p>
                    </div>
                </div>
            `

            grid.appendChild(col)

            
        })


    }




render(reviews)
})