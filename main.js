
let number = document.getElementsByClassName("quest_number")
let choose = new Array(234).fill(0);
let user_option = new Array(234);
for(var i = 0; i<answers.length; i++)
{
    let answer = answers[i].children;
    for(var j = 0; j<answer.length; j++)
    {
        answer[j].onmouseover = function()
        {
            this.style.cursor = "pointer"
        }
        answer[j].addEventListener("click", function()
            {
                let option_answers = this.parentNode;
                let options = option_answers.children
                for(var k = 0;k<options.length; k++) options[k].style.backgroundColor = "white"

                this.style.backgroundColor = "#DDD"
                let quest_val = this.id.split("_");
                user_option[quest_val[2]-1] = this;
                for(var l = 0; l<number.length; l++)
                {
                    if(user_option[l] != null) number[l].style.backgroundColor = "#0DF";
                    else number[l].style.backgroundColor = "#FFF"
                }

            }
        )
    }
}
for(var i=0;i<number.length; i++)
{
    number[i].onmouseleave = function()
    {
        this.style.fontWeight = "normal"
    }
}