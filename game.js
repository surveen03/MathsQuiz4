function send(){
    Number1= document.getElementById("Number1").value;
    Number2= document.getElementById("Number2").value;
    answer= parseInt(Number1) * parseInt(Number2);
    question = "<h4>" + Number1 + "X" + Number2 +"</h4>";
    input_box="<br>Answer : <input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row= question + input_box + check_button;
    document.getElementById("output").innerHTML= row;

    document.getElementById("Number1").value;
    document.getElementById("Number2").value;
}

question_turn="player1";
answer_turn="player2";

function check()
{
    get_answer= document.getElementById("input_check_box").value;
    if(get_answer == answer)
    {
        if(answer_turn == "player1")
        {
            update_player1_score = player1score +1
            document.getElementById("player1score").innerHTML = update_player1_score;
        }
        else
        {
            update_player2_score = player2score +1
            document.getElementById("player2score").innerHTML = update_player2_score;

        }
    }
    if(question_turn == "player1")
    {
        question_turn = "player2"
        document.getElementById("question").innerHTML = "Question turn - " + player2_name;

    }
    else
    {
        question_turn = "player1"
        document.getElementById("question").innerHTML = "Question turn - " + player1_name;

    }
}