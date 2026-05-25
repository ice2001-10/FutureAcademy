let ageCard = []
let ageButton = []
const ageInfo = document.getElementById('ageInfo');
const ageContainer = document.getElementById('ageContainer');
ageInfo.style.top = `${ageContainer.getBoundingClientRect().bottom+scrollY-ageInfo.getBoundingClientRect().height}px`;
for (let i=0;i<3;i++) {
    ageCard.push(document.getElementById(`part2age${i}Card`));
    ageButton.push(document.getElementById(`part1age${i}`));
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