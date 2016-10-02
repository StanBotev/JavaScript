// function gradsToDegrees(num) {
//     let grads = Number(num);
//     let degrees =0.9 * grads;
//     while (degrees<0 || degrees>=360){
//         if (degrees<=360){
//             degrees = 360 - Math.abs(degrees);
//         }
//         else {
//             degrees = Math.abs(degrees) - 360;
//         }
//     }
//     return degrees;
// }
//
// gradsToDegrees(850);

function solvingTheEquation([gradians]) {
    gradians = Number(gradians);
    gradians = gradians % 400 ;

    gradians += 400 ;

    gradians = gradians % 400 ;

    // if (gradians < 0){
    //     gradians += 400;
    // }

    let degrees = gradians * 0.9;
    return degrees;
}
