document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("subBtn").addEventListener("click",function(e){
        e.preventDefault();
        updateQuarkThoughts();
    })
});

function updateQuarkThoughts(){
    let userSubmission = document.getElementById("quarkThoughts").value;
    document.getElementById("updatedInfo").innerHTML += userSubmission + "<br></br>";
    //console.log(userSubmission);
    // let oldContent = document.getElementById("updatedInfo").innerHTML;
    // if (oldContent === ""){
    //     console.log(oldContent);
    //     document.getElementById("updatedInfo").innerHTML = userSubmission;
    // } else {
    //     console.log(oldContent);
    //     document.getElementById("updatedInfo").innerHTML = userSubmission +"<br><br>" + oldContent;
    // }
}
