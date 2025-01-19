function calculateAge() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    if (!day || !month || !year) {
        document.getElementById('result').innerText = "Please fill out all fields correctly.";
        return;
    }

    const today = new Date();
    let age = today.getFullYear() - year;
    const currentMonth = today.getMonth() + 1;
    const currentDay = today.getDate();

    if (month > currentMonth || (month === currentMonth && day > currentDay)) {
        age--;
    }

    if (age < 0) {
        document.getElementById('result').innerText = "Invalid date of birth.";
    } else {
        document.getElementById('result').innerText = `Your age is ${age} years.`;
    }
}
