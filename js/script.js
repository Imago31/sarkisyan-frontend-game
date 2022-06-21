//game 1
document.querySelector('.game_1').onclick=function(){
        document.querySelector('.modal_1').style="display: flex;";
        document.querySelector('.button_game_1').onclick=function(){
            let firstWord = document.querySelector('input[name="first_word"]').value;
            let secondWord = document.querySelector('input[name="second_word"]').value;
            if(firstWord == "" || secondWord == ""){
                document.querySelector('.errorLine').innerHTML='Нужно ввести два слова';
                document.querySelector('.errorLine').style='color:#FF1493';
            }
            else if( firstWord.indexOf(' ') >= 0 || secondWord.indexOf(' ') >= 0  ){
                document.querySelector('.errorLine').innerHTML='Слова должны быть без пробелов';
                document.querySelector('.errorLine').style='color:#FF1493';
            }
            else{
                firstWord = firstWord.split('').sort();
                secondWord = secondWord.split('').sort();
                firstWord = firstWord.join();
                secondWord = secondWord.join();

                if( firstWord == secondWord ){
                    document.querySelector('.errorLine').innerHTML='Слова являются анаграммой';
                    document.querySelector('.errorLine').style='color:#ADFF2F';
                    
                }
                else{
                    document.querySelector('.errorLine').innerHTML='Слова НЕ являются анаграммой';
                    document.querySelector('.errorLine').style='color:#FF4500';
                }
            }
        }


}


//game 2

document.querySelector('.game_2').onclick=function(){
    document.querySelector('.modal_2').style="display: flex";
    stone.click();
    document.querySelector('.button_game_2').onclick=function(){
        if(stone.checked){
            player_choose = 'камень';
            document.querySelector('.player').innerHTML='Ваш ход: '+ player_choose;
            document.querySelector('.player').style='color:yellow'; 
        }
        if(scissors.checked){
            player_choose = 'ножницы';
            document.querySelector('.player').innerHTML='Ваш ход: '+ player_choose;
            document.querySelector('.player').style='color:yellow'; 
        }
        if(paper.checked){
            player_choose = 'бумага';
            document.querySelector('.player').innerHTML='Ваш ход: '+ player_choose;
            document.querySelector('.player').style='color:yellow'; 
        }

            let comp_choose_num = Math.floor(Math.random() * (4 - 1)) + 1;
            if( comp_choose_num == 1 ){
                comp_choose = 'камень';
            }
            if( comp_choose_num == 2 ){
                comp_choose = 'ножницы';
            }
            if( comp_choose_num == 3 ){
                comp_choose = 'бумага';
            }
            setTimeout(function(){
                document.querySelector('.comp').innerHTML='Ход компьютера: ' + comp_choose;
                document.querySelector('.comp').style='color: yellow';  
                setTimeout(function(){
                    if( player_choose == 'камень' && comp_choose == 'ножницы'){
                        document.querySelector('.errorLine2').innerHTML='Поздравляю! Вы выиграли!!!'; 
                        document.querySelector('.errorLine2').style='color:#ADFF2F';  
                    }
                    if( player_choose == 'ножницы' && comp_choose == 'бумага'){
                        document.querySelector('.errorLine2').innerHTML='Поздравляю! Вы выиграли!!!';
                        document.querySelector('.errorLine2').style='color:#ADFF2F';   
                    }
                    if( player_choose == 'бумага' && comp_choose == 'камень'){
                        document.querySelector('.errorLine2').innerHTML='Поздравляю! Вы выиграли!!!';
                        document.querySelector('.errorLine2').style='color:#ADFF2F';   
                    }

                    if( player_choose == 'камень' && comp_choose == 'бумага'){
                        document.querySelector('.errorLine2').innerHTML='К сожалению, вы проиграли!'; 
                        document.querySelector('.errorLine2').style='color:#FF1493'; 
                    }
                    if( player_choose == 'ножницы' && comp_choose == 'камень'){
                        document.querySelector('.errorLine2').innerHTML='К сожалению, вы проиграли!';  
                        document.querySelector('.errorLine2').style='color:#FF1493'; 
                    }
                    if( player_choose == 'бумага' && comp_choose == 'ножницы'){
                        document.querySelector('.errorLine2').innerHTML='К сожалению, вы проиграли!'; 
                        document.querySelector('.errorLine2').style='color:#FF1493';  
                    }
                    if( player_choose ==  comp_choose ){
                        document.querySelector('.errorLine2').innerHTML='Ничья! Сделайте новый ход!';  
                        document.querySelector('.errorLine2').style='color:#ffffff'; 
                    }
                },1000);
            },500);   
    }  
}



// game 3
document.querySelector('.game_3').onclick=function(){
    document.querySelector('.modal_3').style="display: flex";
    let i = 0;
    start_question();
    function start_question(){ 
        document.querySelector('.button_game_3').onclick=function(){
            let user_answer = document.querySelector('input[name="user_answer"]').value;
            const secret = {
                answer: 'крапива',
                askQuestion() {
                    if (this.answer == user_answer) {
                        document.querySelector('.errorLine3').innerHTML='Поздравляю! Вы угадали ответ!'; 
                        document.querySelector('.errorLine3').style='color:#ADFF2F'; 
                    } else {
                        i++;
                        console.log(i);
                        if(i<3){
                            document.querySelector('.errorLine3').innerHTML='Неправильный ответ!<br> Сделайте следующую попытку!'; 
                            document.querySelector('.errorLine3').style='color:#FF1493';  
                            start_question();
                        }
                        else{
                            document.querySelector('.errorLine3').innerHTML='Неправильный ответ!<br> <span style="color:yellow">Подсказка: растение</span>'; 
                            document.querySelector('.errorLine3').style='color:#FF1493';      
                            start_question();
                        }
                    }
                }
            }
            secret.askQuestion(i);
        }
    }
}
// **********************

document.querySelectorAll('input').forEach(function(inp){
    inp.onclick=function(){
        document.querySelector('.errorLine').innerHTML='';
        document.querySelector('.errorLine2').innerHTML='';
        document.querySelector('.errorLine3').innerHTML='';
        document.querySelector('.player').innerHTML='';
        document.querySelector('.comp').innerHTML='';
    }
});

document.querySelectorAll('.modal_hover').forEach(function(modal_hover){
    modal_hover.onclick=function(){
        document.querySelectorAll('.modal_wrap').forEach(function(modal_wrap){
            modal_wrap.style="display: none";
        });
    }
});


const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

