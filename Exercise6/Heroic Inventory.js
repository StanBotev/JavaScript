function heroesList(arr) {
    let heroData = [];

    for (let index= 0 ; index < arr.length ; index++) {
        let heroSpecs = arr[index].split(' / ');

        let currHeroName = heroSpecs[0];
        let currHeroLevel = Number(heroSpecs[1]);
        let currHeroItems = [];

        if (heroSpecs.length>2){
            currHeroItems = heroSpecs[2].split(', ');
        }

        let hero = {
            name: currHeroName,
            level: currHeroLevel,
            items: currHeroItems
        };

        heroData.push(hero);
    }

    console.log(JSON.stringify(heroData));
}

heroesList([
   'Isacc / 25 / Apple, GravityGun',
   'Derek / 12 / BarrelVest, DestructionSword',
   'Hes / 1 / Desolator, Sentinel, Antara'
]);