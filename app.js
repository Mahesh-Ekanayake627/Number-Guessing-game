document.body.style.zoom = "120%";
//Input check
let input = document.getElementById("guessInput");
input.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, "");
});

let GuessNoArray = [];
let result = "";
let guess;

let randomNumber = Math.floor(Math.random() * 10 + 1);
let attempts = 0;
console.log("Random Number : " + randomNumber);
function getRandomNumber() {
    if (attempts == 3) {
        Swal.fire("You attempts are Over!");
        return;
    } else {
        attempts++;
        if (attempts == 3) {
            document.getElementById("randomNo").innerHTML = `<h3>${"The random number is : " + randomNumber}</h3>`;
        }
        console.log("Random Number : " + randomNumber);
        guess = Number(document.getElementById("guessInput").value);
        console.log("Your Guess : " + guess);
        console.log("Attempts : " + attempts);

        if (guess > 10 || guess < 0) {
            attempts--;
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Your guessing is not in between 1 and 10!",
                showConfirmButton: false,
                timer: 1500
            });
        } else if (guess > randomNumber) {
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
            result = "greater than"
        } else if (guess < randomNumber) {
            Swal.fire({
                title: "Your guessing is less than the random number",
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
            result = "less than"
        } else if (guess == randomNumber) {
            Swal.fire({
                title: "Correct Guess!",
                text: "You clicked the button!",
                icon: "success"

            });
            result = "Correct guess"
        }
        document.getElementById("guessInput").value = ""
        console.log("");
    }
    //let GuessNo=Number(document.getElementById("guessInput").value);
    const GuessNolist = {
        NoofAttempts: attempts,
        RandomNo: randomNumber,
        GuessingNo: guess,
        Result: result
    };
    if ((guess >= 0 && guess <= 10) || guess == randomNumber) {
        GuessNoArray.push(GuessNolist);
        lordhistorytable();
    }
    console.log(GuessNoArray);
}
function restartgame() {
    document.getElementById("randomNo").innerHTML = "";
    document.getElementById("tblHistoryofGame").querySelector("tbody").innerHTML = "";
    GuessNoArray.length = 0;

    document.getElementById("restart");
    attempts = 0;
    randomNumber = Math.floor(Math.random() * 10 + 1);
    console.log("Random Number : " + randomNumber)
    document.getElementById("guessInput").value = "";
}
function lordhistorytable() {

    let body = `<thead>
                <tr>
                    <th>No of Attempts</th>
                    <th>Guessing No</th>
                    <th>Result</th>
                </tr>
            </thead>`

    for (let Numberlist of GuessNoArray) {
        body += `<tr align="Center">
                <td >${Numberlist.NoofAttempts}</td>
                <td>${Numberlist.GuessingNo}</td>
                <td>${Numberlist.Result}</td>
            </tr>`
    }
    document.getElementById("tblHistoryofGame").innerHTML = body;
}



