export async function fetchAPI() {
    // just an easy fast test
    fetch("http://localhost:3001/api")
        .then((res) => res.text())
        .then((data) => console.log(data))

}