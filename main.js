let round = true; const board = ['0', '1' , '2','3', '4', '5','6', '7', '8'];

function check(){
    for(let i = 0; i < 3; i++)
    {
        if((board[3*i] == board[3*i + 1]) && (board[3*i + 1] == board[3*i + 2]) || (board[i] == board[i + 3]) && (board[i + 3] == board[i + 6]))
        win(); 
    }
    if((board[0] == board[4])&&(board[4]==board[8]) || (board[2] == board[4])&&(board[4]==board[6])) win();
}


function win()
 {
    for(let i in board) board[i] = '69';
    x = round === false ? ' kółko' : ' krzyżyk';
    document.querySelector('#display-winner').innerHTML = x;
    document.querySelector('#win').style.left = "20%";  
    console.log("dziala");
 }


 document.getElementById("reset").addEventListener("click", () =>{

    for(let i = 1; i < 10; i++){
        document.getElementById(`t${i}`).innerHTML = '';
        board[i-1] = i-1;
    }
    document.getElementById('win').style.left = "-200%";
    round = true;
});

let tile = document.querySelectorAll('.tile');

    tile.forEach((item, index) => {
        item.addEventListener("click", () =>{
            if(board[index] == index){
                board[index] = round == false ?  10 : 20;
                document.querySelector(`#t${index+1}`).innerHTML = round == false ? '<img src="images/x.png"/>' : '<img src="images/O.png"/>';
                round = !round;
                check();
            }
        })
    });
