function appearFont(option){
    if (option.use == 'true'){
        const text = document.querrySelector(".appearFont");
    const userText = text.textContent;
    const splitText = userText.split("")

    for (let i =0;i<splitText.length;i++){
        text.innerHTML += "<span>"+ splitText[i] +"</span>";
    }

    let char = 0;
    let timer = setInterval(onTick,50);

    function onTick(){
        const span = text.querrySelectorAll('span')[char];
        span.classList.add('fade');
        char++
        if(char === splitText.length){
            complete();
            return;
        }
    }

    function complete(){
        clearInterval(timer);
        timer = null;
    }
    }
}

module.exports.appearFont = appearFont;

