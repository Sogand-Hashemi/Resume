function setDate(){
    // console.log('hello');
    const secondsHand = document.querySelector('.second-hand');
    const minutesHand = document.querySelector('.minute-hand');
    const houresHand = document.querySelector('.hour-hand');
    // secondsHand.style.display = 'block';
    // minutesHand.style.display = 'block';
    // houresHand.style.display = 'block';
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const houres = now.getHours();
    const secondsDegrees = ((seconds / 60) * 360)+90;
    const minutesDegrees = ((minutes / 60) * 360)+ 90;
    const houresDegrees = ((houres / 12) * 360)-270;
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
    houresHand.style.transform = `rotate(${houresDegrees}deg)`;
    // console.log(seconds);
    // console.log(minutes);
    // console.log(houres);
    if(seconds === 0){
        secondsHand.style.transition = 'none';
    }    
    if(minutes === 0){
        minutesHand.style.transition = 'none';
    }    
    if(houres === 0){
        houresHand.style.transition = 'none';
    }

}
setInterval(setDate,1000);