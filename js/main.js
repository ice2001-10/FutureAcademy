const part3 = document.getElementById('part3');
const part3Img = document.getElementById('part3Img');
const part3Play = document.getElementById('part3Play');

part3Play.style.left = `${part3Img.style.left+part3Img.clientWidth/2}`;



let ageCard = []
let ageButton = []
const ageInfo = document.getElementById('ageInfo');
const ageContainer = document.getElementById('ageContainer');
ageInfo.style.top = `${ageContainer.getBoundingClientRect().bottom+scrollY-ageInfo.getBoundingClientRect().height}px`;
for (let i=0;i<3;i++) {
    ageCard.push(document.getElementById(`part2age${i}Card`));
    ageButton.push(document.getElementById(`part2age${i}`));
    ageInfo.style.left = `${ageButton[0].getBoundingClientRect().left}px`;
    ageButton[i].addEventListener('click', () => {
        if (i==0) {
            ageInfo.style.left = `${ageButton[0].getBoundingClientRect().left}px`;
            ageCard[0].style.display = 'flex';
            ageCard[1].style.display = 'none';
            ageCard[2].style.display = 'none';
            console.log('age0');
        } else if (i==1) {
            ageInfo.style.left = `${ageButton[1].getBoundingClientRect().left}px`;
            ageCard[0].style.display = 'none';
            ageCard[1].style.display = 'flex';
            ageCard[2].style.display = 'none';
            console.log('age1');
        } else if (i==2) {
            ageInfo.style.left = `${ageButton[2].getBoundingClientRect().left}px`;
            ageCard[0].style.display = 'none';
            ageCard[1].style.display = 'none';
            ageCard[2].style.display = 'flex';
            console.log('age2');
        }
    })
}




const part5Button = [];
const part5Icon = [];

for (let i=0;i<2;i++) {
    part5Button.push(document.getElementById(`part5Button${i+1}`));
    part5Icon.push(document.getElementById(`part5Icon${i+1}`));

    part5Button[i].addEventListener('mouseover', function() {
        part5Icon[i].src = 'images/main/part5/buttonIconWhite.svg';
        part5Button[i].style.backgroundColor = '#000';
        console.log(`f${i}`);
    })
    part5Button[i].addEventListener('mouseout', function() {
        part5Icon[i].src = 'images/main/part5/buttonIcon.svg';
        part5Button[i].style.background = 'none';
    })
}

orangeTitleContainer = document.getElementById('orangeTitleContainer');
orangeInfo = document.getElementById('orangeInfo');
orangeInfoTitle = document.getElementById('orangeInfoTitle');
a = 0;

f = () => {
    if (window.innerWidth <= 700 && a==0) {
        orangeInfo.removeChild(orangeInfoTitle);
        orangeTitleContainer.appendChild(orangeInfoTitle);
        a=1;
    }
}
setInterval(f,100)




// let part2Card = [];
// for (i=0;i<9;i++) {

// }




