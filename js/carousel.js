
let card = [];
for (i=0;i<8;i++) {
    card.push(document.getElementById(`part6Card${i+1}`));
}
console.log(card)


let index = 8;
let j = 1;
let dj = 1;
let a = 1;
let dIndex = -1;
let carousel = function() {
    
    for (i=1;i<9;i++) {
        if (a == 1) {
            if (i==index) {
                card[i-1].style.left = `-${window.innerWidth}px`;
            }
            card[i-1].style.transform = `translateX(${j*280-20*j}px)`;
        } else {
            if (i==index) {
                card[i-1].style.left = `${window.innerWidth+280}px`;
                console.log(card[i-1].style.left)
            }
            card[i-1].style.transform = `translateX(${j*280-20*j}px)`;
        }
    }
    
    index+=dIndex;
    j+=dj;
    console.log('true',index);
    if (index==1) {
        dIndex*=-1
        dj*=-1;
        a*=-1;
    }
}

// let index = 7;
// let j = 0;
// let carousel = function() {
    
//     for (i=0;i<8;i++) {
//         card[i].style.left = `${300*j}px`;
//         // card[i].style.transform = `translateX(${(j+1)*280+(j+1)*20}px)`;
        
//         if (i==index) {
//             card[i].style.left = `-${i*300}px`;
//             // card[i].style.transform = `translateX(-${(i+1)*280+20*(i)}px)`;
//             console.log(index, card[i].style.left);
//         }
//     }
//     if (index==0) {
//         index = 7;
//         j=0;
//     } else {
//         index--;
//         j++;
//     }
// }

setInterval(carousel,1000);
// carousel();