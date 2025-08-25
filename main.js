//import moment from "moment";

document.getElementById("go").addEventListener("click", createTimer);

function createTimer() {
    const timeEnd = parseInt(document.getElementById("value").value);
    const unit = document.getElementById("units").value;
    let end = moment().add(timeEnd, unit);

    const timer = setInterval(() => {
        let diff = end.diff(moment(), "seconds");
        if(diff <= 0) {
            document.getElementById("end").textContent = "Time`s up!";
            clearInterval(timer);
        } else {
        document.getElementById("end").textContent = diff;
        }
    }, 1000);
}