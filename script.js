let verdict=document.getElementById('verdict');
let user_res=document.getElementById('user-res');
let comp_res=document.getElementById('comp-res');
let userScoreELe=document.getElementById('userScore')
let compScoreEle=document.getElementById('compScore');
const compChoice=()=>{
    const Choices=["Rock","Paper","Scissor"];
    let gotChoice=Math.floor(Math.random()*3);
    let compChoice=Choices[gotChoice];
    return compChoice;
}


    // let userWin;
    // function playGame(userChoice){
    //     let computerChoice=compChoice();
    //     userMove.textContent=`You:${userChoice}`
    //     ComputerMove.textContent=`Computer:${computerChoice}`;
    //     if (userChoice==computerChoice){
    //         verdict.textContent="";
    //         verdict.textContent="Its a draw";
    //     }
    //     else if (userChoice=="Rock"){
    //         userWin=(computerChoice=='Scissor')?true:false;
    //         Result(userWin);
    //     }
    //     else if (userChoice=="Scissor"){
    //         userWin=(computerChoice=="Paper")?true:false;
    //         Result(userWin);
    //     }
    //     else if(userChoice=="Paper"){
    //         userWin=(computerChoice=="Rock")?true:false;
    //         Result(userWin);
    //     }
    // }

    // function Result(userWin){
    //     let userScore=Number(userScoreELe.textContent);
    //     let compScore=Number(compScoreEle.textContent);
    //     if (userWin){
    //         userScore+=1;
    //         userScoreELe.textContent=userScore;
    //         verdict.textContent="User Win!!"
    //     }else{
    //         compScore+=1;
    //         compScoreEle.textContent=compScore;
    //         verdict.textContent="Computer Win!!"
    //     }
    // }

function playGame(userChoice){
    let computerChoice=compChoice();
    user_res.textContent=`${userChoice}`;
    comp_res.textContent=`${computerChoice}`;
    let userScore=Number(userScoreELe.textContent);
    let compScore=Number(compScoreEle.textContent);
    if(userChoice==computerChoice){
        verdict.textContent="Its a draw"
        verdict.style.color="#ff6700";
    }
    else if ((userChoice=="Rock" && computerChoice=="Scissor") || (userChoice=="Paper" && computerChoice=="Rock") || (userChoice=="Scissor" && computerChoice=="Paper")){
        userScore+=1;
        userScoreELe.textContent=userScore;
        verdict.textContent="User Win!!"
        verdict.style.color="#ef233c";
    }else{
        compScore+=1;
        compScoreEle.textContent=compScore;
        verdict.textContent="Computer Win!!"
        verdict.style.color="#ef233c";
    }
}


let newgame=document.getElementById('newgame');
newgame.addEventListener('click',()=>{
    //console.log('helo');
    user_res.textContent="";
    comp_res.textContent="";
    userScoreELe.textContent='0';
    compScoreEle.textContent='0';
    verdict.textContent="Play Your Move";
    verdict.style.color="#000000";
})

