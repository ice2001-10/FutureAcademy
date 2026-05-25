const orangeButton = document.getElementById(`orangeButton`);
const orangeIcon = document.getElementById(`orangeIcon`);

orangeButton.addEventListener('mouseover', function() {
    orangeIcon.src = 'images/main/part5/buttonIconWhite.svg';
    orangeButton.style.backgroundColor = '#000';
    console.log(`f`);
})
orangeButton.addEventListener('mouseout', function() {
    orangeIcon.src = 'images/main/part5/buttonIcon.svg';
    orangeButton.style.background = 'none';
})