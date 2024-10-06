    // 1. 1~9까지의 정수 중 3개 구하기 : 정답
    // 2. 누르면 숫자3개 값 가져오기 : 유저답
    // 3. 1과 2 비교하기
    // 3-1. 숫자와 인덱스가 모두 같으면 스트라이크 +
    // 3-2. 숫자만 같으면 볼 +
    // 3-3. 3글자 모두 같으면 홈런
    // 3-4. 3글자 모두 다르면 아웃
    // 4. 출력


    // 1. 1~9까지의 정수 중 3개 구하기 : 정답
    var testAnswer = [];
    function calTesterAnswer(){
        for (var i = 1; i < 4; i++) {
            var index = Math.floor((Math.random() * 9) + 1); 
            //indexOf()의 파라미터 안의 문자가 해당 배열안에 없다면 결과값으로 -1을
            if(testAnswer.indexOf(index)  === -1){
                testAnswer.push(index) 
            }else{
                i--;
            }
        }
        document.getElementById('test_answer').innerHTML = testAnswer;
    }
                   
    //  2. 누르면 숫자 값 가져오기 : 유저답
    var userAnswer = []; 
    function calUserAnswer(e){
        var userPushindex = e.target.textContent; // 유저가 누른 값

        if(userAnswer.length <= 0 || userAnswer.length < 3 ){
            userAnswer.push(Number(userPushindex));
            document.getElementById('user_answer').innerHTML = userAnswer;
        }else{
            alert('3자리 숫자를 모두 입력하셨습니다. 제출 버튼을 눌러주세요')
        }
        
    }


    var strike = 0;
    var ball = 0;

    // 3. 1과 2 비교하기
    function calAnswerEvent(){

        if(userAnswer.length < 3){
            alert('숫자 입력을 3개 해주세요');
            return;
        }else{
            calTesterAnswer()
        }

        console.log(testAnswer) 
        console.log(userAnswer)

        // 3-1. 1과 2의 숫자와 인덱스가 모두 같으면 스트라이크 +
        if(testAnswer[0] === userAnswer[0]){
            strike ++;
        }
        if(testAnswer[1] === userAnswer[1]){
            strike ++;
        }
        if(testAnswer[2] === userAnswer[2]){
            strike ++;
        }
        if(strike === 3){
            var tmpP = document.createElement('p');
            tmpP.innerHTML = '홈런'
            document.querySelector('.result_area').appendChild(tmpP)
        }
        


        // 3-2. 1과 2의 숫자만 같으면 볼 + / 1과 2의 숫자가 일치하지 않으면 out
        // 두 배열을 합쳐 새로운 set 배열로 만들어서 기존 배열과 set 배열의 길이값을 비교함
        // ++ set은 중복된 수를 제거해줌
        const newArrAnsewer = [
            ...testAnswer,
            ...userAnswer
        ]
        console.log(newArrAnsewer)
        const setAnswer = new Set(newArrAnsewer)
        console.log(newArrAnsewer.length)
        console.log(setAnswer.size)


        if(newArrAnsewer.length - setAnswer.size === 1){
            if(strike === 1){
                ball;
            }else{
                ball ++;
            }         }
        else if(newArrAnsewer.length - setAnswer.size === 2){
            if(strike === 1){
                ball = ball+1
            }else{
                ball = (ball+1)* 2;
            }
        }
        else if(newArrAnsewer.length - setAnswer.size === 3){
            if(strike === 1){
                ball = (ball+1)* 2;
            }else if(strike === 2){
                ball = ball+1
            }else{
                ball = (ball+1)* 3;
            }

        }
            
        var tmpP = document.createElement('p');
        if(strike != 3){
            tmpP.innerHTML = ball + '볼' + strike + '스트라이크'
        }
        if(ball == 0 && strike == 0){
            tmpP.innerHTML = '아웃'
        }

        document.querySelector('.result_area').appendChild(tmpP)
    }
