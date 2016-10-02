function piramidOfDolars([n]) {
    let lenght = Number(n);
    let dolars = '$';

    for (let i = 1 ; i<=lenght ; i++){
        console.log(dolars.repeat(i));
    }
}

piramidOfDolars(['7']);