const entities = [
    {
      city: 'Rostov-on-Don LCD admiral',
      area: '81 m2',
      time: '3.5 months',
      img: 'img/image1.png',
    },
    {
      city: 'Sochi Thieves',
      area: '105 m2',
      time: '4 months',
      img: 'img/image2.png'
    },
    {
      city: 'Rostov-on-Don Patriotic',
      area: '93 m2',
      time: '3 months',
      img: 'img/image3.png'
    }
  ]
  //для навигации по точкам, добавляем функцию 
  function sliderInit(entities, options) {
    if (!entities || !entities.length) return;
    options = options || {
      dots: false,
    };
  }
  
  const city = document.querySelector('.city')
  const area = document.querySelector('.area')
  const time = document.querySelector('.time')
  const img = document.querySelector('.project-img-container')
  
  const setEntity = (index) => {
    city.innerText = entities[index].city
    area.innerText = entities[index].area
    time.innerText = entities[index].time
    img.style.backgroundImage = `url(${entities[index].img})`
  }
  //условие для навигации по точкам
  if (options.dots) {
    initDots();
  }
  
  const prev = document.querySelector('.prev')
  const next = document.querySelector('.next')
  const v1 = document.getElementById('vector-3.1')
  const v2 = document.getElementById('vector-3.2')
  const v3 = document.getElementById('vector-3.3')
  const dots = document.querySelector('.dots')
  let currentIndex = 0
  
  prev.addEventListener('click', () => {
    if (currentIndex==0) {
        currentIndex = (entities.length);
    } else {
    setEntity(currentIndex - 1);
    currentIndex -= 1;
    }
  })
  next.addEventListener('click', () => {
    if ( currentIndex == (entities.length-1)) {
        currentIndex=-1;
    } else {
       setEntity(currentIndex + 1);
       currentIndex += 1;
    }
  })
  v1.addEventListener('click', () => {
    if (currentIndex==0) {
        currentIndex = 0;
        dots.toggleClass('active')
    }
    else {
      dots.toggleClass('active')
    }
  })
  v2.addEventListener('click', () => {
    if (currentIndex==1) {
        currentIndex = 1;
        dots.classList.toggle('active')
    }
    else {
      dots.classList.toggle('active')
    }
  })
  v2.addEventListener('click', () => {
    if (currentIndex==2) {
        currentIndex = 2;
        dots.classList.toggle('active')
    }
    else {
      dots.classList.toggle('active')
    }
  })
  //функция для навигации по точкам
  function initDots() {
    let dotsWrapper = document.createElement("div");
    dotsWrapper.className = "slider__dots";
    
    images.forEach((image, index) => {
      let dot = document.createElement("div");
      dot.className = `slider__dots-item n${index} ${index === 0? "active" : ""}`
      dot.dataset.index = index;
      dot.addEventListener("click", function() {
        moveSlider(dot.dataset.index);
      });
      dotsWrapper.appendChild(dot);
    });
    sliderWrapper.appendChild(dotsWrapper);
  }