let round = true, board = ['', '' , '','', '', '','', '', ''];
function check(){
    for(let i = 0; i < 3; i++)
    {
        if(a == 10)
        {
            win(); 
        }

    }
}


function win()
 {
    board = board = ['', '' , '','', '', '','', '', ''];
    x = round === flase ? ' kółko' : ' krzyżyk';
    document.querySelector('#display-winner').innerHTML = x;
    document.querySelector('#win').style.left = "20%";  
 }


 document.getElementById("reset").addEventListener("click", () =>{
    for(let i = 1; i < 10; i++)
    {
        document.getElementById(`t${i}`).innerHTML = '';
    }

    board = [['', '' , ''],['', '', ''],['', '', '']];
    document.getElementById('display-winner').innerHTML = 'kurwa';
    document.getElementById('win').style.left = "-200%";

    round = true;
});


let q = document.querySelectorAll('.tile');
    q.forEach((item, index) => {
        q[index].addEventListener("click", () =>{
            if(board[index] == ''){
                board[index] = round == false ?  1 : 2;
                document.querySelector(`#t${index+1}`).innerHTML = round == false ? '<img src="images/x.png"/>' : '<img src="images/O.png"/>';
                round = !round;
            }
        })
    });
