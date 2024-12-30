let right = 0, wrong = 0, complete = 0;
let correct_option = document.getElementsByClassName("correct");
let btn_accept = document.getElementsByClassName("btn-accept")
function grade(){
    console.log(user_option)
    for(var i = 0; i<234; i++)
    {
        if(user_option[i]==null||user_option[i]=="")
        {
            number[i].style.backgroundColor = "#DD0"
        }
        else
        {
            document.getElementById(user_option[i]).style.backgroundColor = "#F00"
            if(document.getElementById(user_option[i])==correct_option[i])
            {
                right++;
                number[i].style.backgroundColor = "#0D0"
            }
            else
            {
                number[i].style.backgroundColor = "#D00"
                wrong++;
            }
        }
        if(correct_option[i]!=null)
        correct_option[i].style.backgroundColor = "#0D0";
    }
    alert("Số câu đúng: " + right + " câu\nSố câu sai: " + wrong + " câu\nSố câu chưa làm: " + (234-wrong-right) + "câu\nTỷ lệ đúng: " + parseFloat((right/234*100).toFixed(2)) + "%")
    document.getElementById("quest_data").style.pointerEvents = "none"
}
for(var i = 0; i<btn_accept.length; i++)
{
    btn_accept[i].addEventListener("click", function()
    {
        complete = 1;
        grade();
        saveData();
    })
}