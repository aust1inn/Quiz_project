function check () {
    var c=0;
    var q1 = document.quiz.quiz1.value;
    var q2 = document.quiz.quiz2.value;
    var q3 = document.quiz.quiz3.value;
    var q4 = document.quiz.quiz4.value;
    var q5 = document.quiz.quiz5.value;

    if (q1=="Russia") {c++}
    if (q2=="Caracas") {c++}
    if (q3=="North America") {c++}
    if (q4=="Hugo Chavez") {c++}
    if (q5=="Evanston") {c++}

    document.write(c)
}