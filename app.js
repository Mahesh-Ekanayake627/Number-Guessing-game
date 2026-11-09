// console.log("Hello, World!");
// console.log(Math.floor(Math.random()*10+1))

let randomNumber = Math.floor(Math.random() * 10 + 1);
let attempts = 0;
 console.log("Random Number : " + randomNumber);
function getRandomNumber() {
    if (attempts == 3) {
        Swal.fire("You attempts are Over!");
        return;
    } else {
        console.log("Random Number : " + randomNumber);
        let guess = Number(document.getElementById("guessInput").value);
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

        }
        else if (guess == randomNumber) {
            Swal.fire({
                title: "Correct Guess!",
                text: "You clicked the button!",
                icon: "success"
            });
        }
        document.getElementById("guessInput").value = ""
        console.log("");
    }
    //lordhistorytable();
}

//function 