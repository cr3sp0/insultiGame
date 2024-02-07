document.addEventListener("DOMContentLoaded", function(){
    const text = document.getElementById("text-bar");
    text.disabled = true;
    document.getElementById("start-game").addEventListener("click", function() {
        
        document.getElementById("start-game").remove();

        const timer = document.getElementById("timer");
        var secondi = 4;
    
        var interval = setInterval(function() {
        
        secondi--;
        timer.textContent = secondi;

        if (secondi == 0) {
            timer.textContent = 'VIA';
        }

        if (secondi < 0) {
            clearInterval(interval);
            timer.textContent = 'HAI 30 SECONDI PER INSULTARE ALESSIO...';
            text.disabled = false;
            part2();
        }
        }, 1000);
        
        
    })

    function part2() {
        const text = document.getElementById("text-bar");
        const arr = [];

        setTimeout(function () {
        text.remove();
        part3(arr);
        }, 30000);

        text.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
              arr.push(text.value);
              text.value = "";
            }
        });
    }

    function part3(arr) {
        
            window.location.href = "risultati.html?arr=" + JSON.stringify(arr);
    }
})





