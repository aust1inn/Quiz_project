function check () {
    var c=0;
    var q1 = document.quiz.quiz1.value;
    var q2 = document.quiz.quiz2.value;
    var q3 = document.quiz.quiz3.value;
    var q4 = document.quiz.quiz4.value;
    var q5 = document.quiz.quiz5.value;
    
    var result =document.getElementById("result")
    var quiz=document.getElementById("quiz")
    var footer=document.getElementById("footer")
   
    if (q1=="Russia") {c+=10}
    if (q2=="Caracas") {c+=10}
    if (q3=="North America") {c+=10}
    if (q4=="Hugo Chavez") {c+=10}
    if (q5=="Evanston") {c+=10}

    quiz.style.visibility="hidden"
    result.style.display="block"
    footer.style.display="none"

    if (c<=30) {
        result.textContent = (c)+"/50"+" " + "(Do more research on our magnificient world.)"
    }
    else{
        result.textContent = (c)+"/50" +" " +"Keep it up!"
    }

}