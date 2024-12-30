
function saveData()
{
    let user = new Array(234)
    console.log(user_option)
    for(var i = 0; i<user_option.length; i++)
        user[i] = user_option[i]!=null?user_option[i]:"";
    console.log(user)
    localStorage.setItem("user_option", JSON.stringify(user));
    localStorage.setItem("complete", JSON.stringify(complete))
}

function loadData()
{
    const result = confirm("Bạn có muốn tiếp tục lần làm trước?");
    if(!result)
    {
        user_option = new Array(234)
        complete = 0;
    }
    else
    {
        user = user_option = JSON.parse(localStorage.getItem("user_option")); 
        complete = JSON.parse(localStorage.getItem("complete"));
        console.log(complete)
        if(complete == 1) grade();
        else
        {
            let number = document.getElementsByClassName("quest_number");
            for(var i = 0; i<user_option.length; i++)
            {
                if(user_option[i]!="" && user_option[i]!=null)
                {
                    document.getElementById(user_option[i]).style.backgroundColor = "#DDD"
                    number[i].style.backgroundColor = "#0DF";
                }
            }
        }
    }
}
window.onload = loadData();