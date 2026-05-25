const burgerMenu = document.getElementById('burgerMenu');
const burgerInfo = document.getElementById('burgerInfo');
let usBurger = 0;

// burgerInfo.style.top = `${document.getElementById('header').getBoundingClientRect().bottom}px`
if (window.innerWidth>=985) {
    burgerInfo.style.left = `${burgerMenu.getBoundingClientRect().left-83}px`
} else {
    burgerInfo.style.left = `${window.innerWidth-220}px`
}


burgerMenu.addEventListener('click', function() {
    if (usBurger==0) {
        burgerInfo.style.display = 'flex';

        document.getElementById('strip1').classList.add('us1');
        document.getElementById('strip2').classList.add('us2');
        document.getElementById('strip3').classList.add('us3');

        usBurger=1
    } else if (usBurger==1) {
        burgerInfo.style.display = 'none';

        document.getElementById('strip1').classList.remove('us1');
        document.getElementById('strip2').classList.remove('us2');
        document.getElementById('strip3').classList.remove('us3');

        usBurger=0
    }   
})


const city = document.getElementById('headerCity');
const cityIcon = document.getElementById('headerCityIcon');
const cityContainer = document.getElementById('headerCityContainer');
const cityNow = document.getElementById('cityNow');
let ifCity = -1;
let cityContent = 'Нижний Новгород';
cityNow.textContent = cityContent;
let cities = [];

for (let i=0;i<5;i++) {
    cities.push([]);
    for (let j=0;j<10;j++) {
        cities[i][j] = document.getElementById(`city${i}_${j}`);
        cities[i][j].addEventListener('click', function() {
            cityContent = cities[i][j].textContent
            console.log(cityContent);
            cityNow.textContent = cityContent;

            ifCity*=-1;
            cityIcon.style.transform = 'rotate(0)';
            cityContainer.style.opacity = '0';
            cityContainer.style.display = 'none';
            console.log(ifCity);
        })
    }
}
console.log(cities)

city.addEventListener('click', function() {
    ifCity*=-1;
    if (ifCity == 1) {
        cityIcon.style.transform = 'rotate(180deg)';
        cityContainer.style.display = 'inline';
        cityContainer.style.opacity = '1';
    } else {
        cityIcon.style.transform = 'rotate(0)';
        cityContainer.style.opacity = '0';
        cityContainer.style.display = 'none';
    }
    console.log('true');
    console.log(ifCity);
})
document.addEventListener('click', function(e) {
    if (ifCity == 1 && !e.target.closest('#headerCityContainer') && !e.target.closest('#headerCity')) {

        ifCity*=-1;
        cityIcon.style.transform = 'rotate(0)';
        cityContainer.style.opacity = '0';
        cityContainer.style.display = 'none';
    }
    if (usBurger == 1 && !e.target.closest('#burgerInfo') && !e.target.closest('#burgerMenu')) {
            burgerInfo.style.display = 'none';

            document.getElementById('strip1').classList.remove('us1');
            document.getElementById('strip2').classList.remove('us2');
            document.getElementById('strip3').classList.remove('us3');

            usBurger=0
    }
})