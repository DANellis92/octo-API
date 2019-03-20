const baseUrl = 'https://us.api.blizzard.com/wow/guild/Bleeding-Hollow /Octopals?fields=members&locale=en_US&access_token=US1fLD6vPLmuvo01tVfhAQKqRI7vQ2mqe5';


let url;
const searchbt = document.querySelector('button');
const param = document.querySelector('input');
const tbl = document.querySelector('.result');
const guildInfo = document.querySelector('table');


searchbt.addEventListener('click', fetchResults);




function fetchResults() {
    fetch(baseUrl).then(function (result) {
        return result.json();
    }).then(function (json) {
        displayResults(json);
    });


}

function displayResults(json) {
    console.log(json)
    while (guildInfo.firstChild) {
        guildInfo.removeChild(guildInfo.firstChild);
    }
    let feedback = json.members;
    /*
    let ident = document.createElement('tr');
    let char = document.createElement('td');
    let lvl = document.createElement('td');
    let view = document.createElement('td');
    view.innerText = 'thumbnail';
    lvl.innerText = 'level';
    char.innerText = 'name';
    ident.appendChild(char);
    ident.appendChild(lvl);
    ident.appendChild(view);
    guildInfo.appendChild(ident);
    */
    let pal = feedback.forEach(p => {
        //console.log(p)
        if (p.character.level = 120) {
            let identy = document.createElement('tr');
            let pal = document.createElement('td');
            let toon = document.createElement('td');
            let ava = document.createElement('td');
            pal.innerText = p.character.name;
            toon.innerText = p.character.level;
            ava.innerText = p.character.thumbnail;
            identy.appendChild(pal);
            identy.appendChild(toon);
            identy.appendChild(ava);
            guildInfo.appendChild(identy);
        }
    })


    //for (a of feedback)
    //      console.log(a.character.name)
    //    console.log(a.character.level)
    //   console.log(a.character.thumbnail)

    //charc.appendChild('.char');

}

/*

for (let i = 0; i < feedback.length; i++) {
 let character = document.createElement('charc');
 let cls = document.createElement('clss');
 let thumbnail = document.createElement('thmbn')


 character.appendChild(charc);
 cls.appendChild(clss);
 thumbnail.appendChild(thmbn);
}
}
*/