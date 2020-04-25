document.addEventListener('DOMContentLoaded',function(){
  let magn = document.querySelector(".magn");
  let gene = document.querySelector(".gene");
  let chem = document.querySelector(".chem");
  let targ = document.querySelector(".targ");
    
    magn.onmouseover = ()=>{
      magn.style.width = "11vw";
      magn.style.height = "2.2vw";
      magn.style.marginTop = "1.4vw"
      magn.style.marginLeft = "-0.5vw"
      magn.style.fontSize = "1.1vw"
    }
    magn.onmouseout = ()=>{
      magn.style.width = "10vw";
      magn.style.height = "2vw";
      magn.style.marginTop = "1.5vw"
      magn.style.marginLeft = "0vw"
      magn.style.fontSize = "1vw"
    }
    
    gene.onmouseover = ()=>{
      gene.style.width = "11vw";
      gene.style.height = "2.2vw";
      gene.style.marginTop = "1.4vw"
      gene.style.marginLeft = "-0.5vw"
      gene.style.fontSize = "1.1vw"
    }
    gene.onmouseout = ()=>{
      gene.style.width = "10vw";
      gene.style.height = "2vw";
      gene.style.marginTop = "1.5vw"
      gene.style.marginLeft = "0vw"
      gene.style.fontSize = "1vw"
    }

    chem.onmouseover = ()=>{
      chem.style.width = "11vw";
      chem.style.height = "2.2vw";
      chem.style.marginTop = "1.4vw"
      chem.style.marginLeft = "-0.5vw"
      chem.style.fontSize = "1.1vw"
    }

    chem.onmouseout = ()=>{
      chem.style.width = "10vw";
      chem.style.height = "2vw";
      chem.style.marginTop = "1.5vw"
      chem.style.marginLeft = "0vw"
      chem.style.fontSize = "1vw"
    }

    targ.onmouseover = ()=>{
      targ.style.width = "11vw";
      targ.style.height = "2.2vw";
      targ.style.marginTop = "1.4vw"
      targ.style.marginLeft = "-0.5vw"
      targ.style.fontSize = "1.1vw"
    }

    targ.onmouseout = ()=>{
      targ.style.width = "10vw";
      targ.style.height = "2vw";
      targ.style.marginTop = "1.5vw"
      targ.style.marginLeft = "0vw"
      targ.style.fontSize = "1vw"
    }
    //轮播图
  let box2 = document.querySelector(".box2");
  let box_img = document.querySelector(".box2").children;
  let left = document.querySelector("#left");
  let right = document.querySelector("#right");
  let list = document.querySelector(".list").children;
  let bannerbox = document.querySelector(".banner-two");
  let x = 0;
  let is = true;
  //定义定时器
 let timer = setInterval(()=>{
    next()
  },3000);
    

  bannerbox.onmouseover = function(){
    clearInterval(timer);
  
  }
  bannerbox.onmouseout = function(){
    timer = setInterval(()=>{
       next()
    }
    ,3000);
  }


  
  right.onclick = function(){
  next();
  }
  left.onclick =function(){
    up();
  }
  //下一张
  function next (){
    if(!is) return
    x++;
 box2.style.transition = 'all .5s';

 //获取图片宽度乘以当前索引
 box2.style.transform  = `translateX(${-box_img[0].offsetWidth * x}px)`
 
 //点击完成后，要等过度完成才改变is的值，
 is = false;
  }
//上一张
function up (){
  if(!is) return
  x--;
  console.log(x);
  
box2.style.transition = 'all .5s';
box2.style.transform  = `translateX(${-box_img[0].offsetWidth * x}px)`

is = false;
}
 
//监听过度完成,执行函数
    box2.addEventListener('transitionend',()=>{
    is = true;
    box2.style.transition = 'none';
    if(x > 2){ 
      x = 0;
      box2.style.transform = `translateX(${-box_img[0].offsetWidth *x }px)`
    }
    if(x < 0){
      x = 2;
    //  let width = -box_img[0].offsetWidth * x;
     
      box2.style.transform = `translateX(${-box_img[0].offsetWidth *x }px)`
    
    }else{
      x = x
    }
    listFn(x)
  })

  //判断圆点
  function listFn(index){
    for(let i = 0;i < list.length; i++){
      list[i].classList.remove('active');
    } 
    //索引大于圆点的最大数就为0
    if(index >= list.length){
      list[0].classList.add('active');
    }else if(index < 0){
       list[ list.length - 1].classList.add('active');
    }else{
      list[index].classList.add('active');
    }
   
  }


})