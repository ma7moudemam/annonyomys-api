let getUsers = async function() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let userResp = await response.json();
    return userResp;
}

let tableData = document.querySelector('table');

async function renderUsers() {
    let users = await getUsers();
    for (let key in users) {
        let createdTr = document.createElement('tr');
        for (let k in users[key]) {
            let createdTd = document.createElement('th');
            createdTd.innerText = k;
            createdTr.append(createdTd);
        }
        tableData.append(createdTr);
        break;
    }
}

async function renderUsersData() {
    let users = await getUsers();
    for (let key in users) {
        let createdTr = document.createElement('tr');
        let value = users[key];
        for (let k in value) {
            let createdTd = document.createElement('td');
            if (typeof value[k] === 'object' && value[k] != null) {
                for (let n in value[k]) {
                    createdTd.innerText = value[k][n];
                    createdTr.append(createdTd);
                }
            } else {
                createdTd.innerText = value[k];
                createdTr.append(createdTd);
            }
        }
        tableData.append(createdTr);
    }
}


renderUsers();
renderUsersData();