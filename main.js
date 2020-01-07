let round = true, board = ['', '' , '','', '', '','', '', ''];

//sprawdza czy ktos aby nie wygral
function check(){
    for(let i = 0; i < 3; i++)
    {
        if(//win condition)
        {      
            win(); 
        }

    }
}

//WIN NOTIFICATION
function win()
 {
    //blokuje plansze
    board = board = ['', '' , '','', '', '','', '', ''];
    //wyswietla w divie kolko albo krzyzyk
    x = round === flase ? ' kółko' : ' krzyżyk';
    document.querySelector('#display-winner').innerHTML = x;
    document.querySelector('#win').style.left = "20%";  
 }
//przycisk RESET
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




// document.querySelector("#t1").addEventListener("click", () =>{
//     if(board[0][0] == ''){
//     if(round == 1)
//     {document.getElementById("t1").innerHTML = '<img src="images/x.png"/>';
//     round = 0;
//     board[0][0] = 10;
//     }
//     else{
//     document.getElementById("t1").innerHTML = '<img src="images/O.png"/>';
//     round = 1;
//     board[0][0] = 20;
// }
//     check();}
// });

// document.getElementById("t2").addEventListener("click", () =>{
//     if(board[0][1] == ''){
//     if(round == 1)
//     {document.getElementById("t2").innerHTML = '<img src="images/x.png"/>';
//     round = 0;
//     board[0][1] = 10;
    
// }
//     else{
//     document.getElementById("t2").innerHTML = '<img src="images/O.png"/>';
//     round = 1;
//     board[0][1] = 20;}
//     check();}
// });

// document.getElementById("t3").addEventListener("click", () =>{
//     if(board[0][2] == ''){
//     if(round == 1)
//     {document.getElementById("t3").innerHTML = '<img src="images/x.png"/>';
//     round = 0;
//     board[0][2] = 10;
// }
//     else{
//     document.getElementById("t3").innerHTML = '<img src="images/O.png"/>';
//     round = 1;
//     board[0][2] = 20;}
//     check();}
// });

// document.getElementById("t4").addEventListener("click", () =>{
//     if(board[1][0] == ''){
//     if(round == 1)
//     {document.getElementById("t4").innerHTML = '<img src="images/x.png"/>';
//     round = 0;
//     board[1][0] = 10;
// }
//     else{
//     document.getElementById("t4").innerHTML = '<img src="images/O.png"/>';
//     round = 1;
//     board[1][0] = 20;}check();}
// });

// document.getElementById("t5").addEventListener("click", () =>{
//     if(board[1][1] == ''){
//     if(round == 1)
//     {document.getElementById("t5").innerHTML = '<img src="images/x.png"/>';
//     round = 0;
//     board[1][1] = 10;
// }
//     else{
//     document.getElementById("t5").innerHTML = '<img src="images/O.png"/>';
//     round = 1;
//     board[1][1] = 20;}check();}
// });


// document.getElementById("t6").addEventListener("click", () =>{
//     if(board[1][2] == ''){
//     if(round == 1)
//     {document.getElementById("t6").innerHTML = '<img src="images/x.png"/>';
//     round = 0;
//     board[1][2] = 10;
// }
//     else{
//     document.getElementById("t6").innerHTML = '<img src="images/O.png"/>';
//     round = 1;
//     board[1][2] = 20;}check();}
// });



// document.getElementById("t7").addEventListener("click", () =>{
//     if(board[2][0] == ''){
//     if(round == 1)
//     {document.getElementById("t7").innerHTML = '<img src="images/x.png"/>';
//     round = 0;
//     board[2][0] = 10;
// }
//     else{
//     document.getElementById("t7").innerHTML = '<img src="images/O.png"/>';
//     round = 1;
//     board[2][0] = 20;}check();}
// });



// document.getElementById("t8").addEventListener("click", () =>{
//     if(board[2][1] == ''){
//     if(round == 1)
//     {document.getElementById("t8").innerHTML = '<img src="images/x.png"/>';
//     round = 0;
//     board[2][1] = 10;
// }
//     else{
//     document.getElementById("t8").innerHTML = '<img src="images/O.png"/>';
//     round = 1;
//     board[2][1] = 20;}check();}
// });
