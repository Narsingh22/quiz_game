import "./App.css";
import MyQuiz from './components/Main.js';

function App() {

    var x = 0;

    const myOptions = (event) => {
        let myQuestions = document.querySelectorAll('.quiz-questions');
        let correctAnswers = document.querySelectorAll('.correct');
        let correctOnesArray = Array.from(correctAnswers);     
        let myPara = document.getElementById("empty");  

            myQuestions[x].classList.add('d-none');

            if(x < myQuestions.length - 1){
                if(correctOnesArray.includes(event.target)){
                    myPara.innerText = "Correct One"
                } else {
                    myPara.innerText = "Wrong One"
                }
                setTimeout(() => {
                    myPara.innerText = "";
                }, 1000)
                x++;
                myQuestions[x].classList.remove('d-none');
            }else {

                if(correctOnesArray.includes(event.target)){
                    myPara.innerText = "Correct One"
                } else {
                    myPara.innerText = "Wrong One"
                }
                setTimeout(() => {
                    myPara.innerText = "";
                }, 1000)
                x = 0;
                myQuestions[x].classList.remove('d-none');
            }

    }

    return (
        <>
            <MyQuiz title="Quiz Game" myOptions={myOptions}/>
        </>
    )
}

export default App;