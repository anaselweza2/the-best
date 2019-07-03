
$(function(){
 const cartIcon = document.getElementById("carticon");
 var myCart = document.getElementById('mycart2');
 cartIcon.addEventListener('click',function(){
     myCart.classList.toggle('my-active-cart')
 })
});
$(function(){
    const arreyTotal =[];
    const incarticon =document.querySelectorAll('.fa-cart-plus');
    incarticon.forEach(function(btn){
        btn.addEventListener('click',function(event){
            

       let div1=event.target.parentElement.parentElement.parentElement;
      let fullpath = div1.parentElement.nextElementSibling.firstElementChild.src;
      
      let pos =fullpath.indexOf('images')+6;
      let imagePath = fullpath.slice(pos);

      let item = {};
      item.img =  imagePath
      let name = div1.parentElement.nextElementSibling.nextElementSibling.children[0].textContent;
      item.name = name;
      let price = div1.parentElement.nextElementSibling.nextElementSibling.children[2].textContent;
      let Price2 = price.slice(1).trim();
      
      item.price = Price2;
      

      const cartProtuctj = document.createElement('div');
      cartProtuctj.classList.add('cart-protuct');

      cartProtuctj.innerHTML = ` <div class='row'>
      <div class ="col-sm-4">
        <img class='img-responsive cart-img'  src ="images${item.img}">
      </div>
      <div class ="col-sm-4">
          <p>${item.name}</p>
          <span>$${item.price}</span>

      </div>
      <div class ="col-sm-4">
        <i class="fa fa-trash fa-2x"></i>
      </div>

     </div>`;
     const cartjj =document.getElementById('mycart2');
     const btnj = document.getElementById("totald");
     cartjj.insertBefore(cartProtuctj,btnj);
     alert('This Item Is added to Your CART')
     
     arreyTotal.push(Number(item.price));
    
    const ptotal = document.getElementById('ptotal');
    const y = arreyTotal.reduce((p,c) => p+c);
    ptotal.innerHTML = `$${y}`;
    document.getElementById('carticon').innerHTML = arreyTotal.length;

      
        })
    })
})

$(function(){
  let icon =  document.getElementById('iconclose');
  var myCart = document.getElementById('mycart2');
  icon.addEventListener('click',function(){
   myCart.classList.remove('my-active-cart');
  })

});

$(function(){
    let button = document.getElementById('btnclear');
    let cartt =document.getElementById('mycart2')
    button.addEventListener('click',function(){
   console.log(cartt.children[0].classList)

  
    })

});
$(function(){
 
 const button2 =document.querySelectorAll('.fa-trash');
 button2.forEach(function(btn2){
  btn2.addEventListener('click',function(event){
    console.log(event);

  })
})
})

