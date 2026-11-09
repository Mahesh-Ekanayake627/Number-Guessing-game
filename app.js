// console.log("Hello, World!");
// console.log(Math.floor(Math.random()*10+1))

let GuessNoArray = [];
let result="";
let guess;

let randomNumber = Math.floor(Math.random() * 10 + 1);
let attempts = 0;
console.log("Random Number : " + randomNumber);
function getRandomNumber() {
    if (attempts == 3) {
        Swal.fire("You attempts are Over!");
        return;
    } else {
        console.log("Random Number : " + randomNumber);
        guess = Number(document.getElementById("guessInput").value);
        attempts++;
        console.log("Your Guess : " + guess);
        console.log("Attempts : " + attempts);

        if (guess > randomNumber) {
            Swal.fire({
                title: "Your guessing is greater than the random number",
                showClass: {
                    popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                ` },
                hideClass: {
                    popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                ` }
            });
            result="Wrong"
        } else if (guess < randomNumber) {
            Swal.fire({
                title: "Your guessing is lessthan the random number",
                showClass: {
                    popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                ` },
                hideClass: {
                    popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                ` }
            });
            result="Wrong"
        }
        else if (guess == randomNumber) {
            Swal.fire({
                title: "Correct Guess!",
                text: "You clicked the button!",
                icon: "success"

            }); 
            result="Correct"
        }
        document.getElementById("guessInput").value = ""
        console.log("");
    }
    //let GuessNo=Number(document.getElementById("guessInput").value);
    
    const GuessNolist = {
        NoofAttempts : attempts,
        RandomNo : randomNumber,
        GuessingNo : guess,
        Result : result
    };
    GuessNoArray.push(GuessNolist);
    console.log(GuessNoArray);
    lordhistorytable();
   

}
function restartgame(){
    document.getElementById("tblHistoryofGame").querySelector("tbody").innerHTML = "";
    GuessNoArray.length=0;

    document.getElementById("restart");
    attempts=0;
    randomNumber = Math.floor(Math.random() * 10 + 1);
    console.log("Random Number : "+randomNumber)
    document.getElementById("guessInput").value = "";  
    
}

function lordhistorytable(){
    
    let body=`<thead>
                <tr>
                    <th>No of Attempts</th>
                    <th>Guessing No</th>
                    <th>Result</th>
                </tr>
            </thead>`

    for(let Numberlist of  GuessNoArray ){
        body += `<tr>
                <td>${Numberlist.NoofAttempts}</td>
                <td>${Numberlist.GuessingNo}</td>
                <td>${Numberlist.Result}</td>
            </tr>`      
    }
    document.getElementById("tblHistoryofGame").innerHTML=body;
}