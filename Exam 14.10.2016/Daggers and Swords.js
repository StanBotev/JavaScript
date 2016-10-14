function daggersAndSwords(input) {
   input = input.map(Number).map(Math.floor);

    console.log(`<table border="1">
<thead>
<tr><th colspan="3">Blades</th></tr>
<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>
</thead>
<tbody>`);

    for (let blade of input){
        if (blade<= 10) continue;
        let app = '';
        let type = 'dagger';
        if (blade>40) type = 'sword';
        switch (blade % 5){
            case 0:
                app = '*rap-poker';
                break;
            case 1:
                app = 'blade';
                break;
            case 2:
                app = 'quite a blade';
                break;
            case 3:
                app = 'pants-scraper';
                break;
            case 4:
                app = 'frog-butcher';
                break;
        }
        console.log(`<tr><td>${blade}</td><td>${type}</td><td>${app}</td></tr>`);

    }

    console.log(`</tbody>
</table>`);
}