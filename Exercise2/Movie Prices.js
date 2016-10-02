function moviePricesDepengingOfTheWeek([movie, day]){

    let lowerCaseTitle = movie.toLowerCase();
    let dayOfTheWeek = day.toLowerCase();

    if (lowerCaseTitle == "the godfather"){
        switch (dayOfTheWeek){
            case "monday": console.log("12");
             break ;
            case "tuesday": console.log("10");
                break ;
            case "wednesday": console.log("15");
                break ;
            case "thursday": console.log("12.50");
                break ;
            case "friday": console.log("15");
                break ;
            case "saturday": console.log("25");
                break ;
            case "sunday": console.log("30");
                break ;
            default:
                console.log("error");
                break;
        }

    }else if (lowerCaseTitle == "schindler's list"){
        switch (dayOfTheWeek){
            case "monday": console.log("8.50");
                break ;
            case "tuesday": console.log("8.50");
                break ;
            case "wednesday": console.log("8.50");
                break ;
            case "thursday": console.log("8.50");
                break ;
            case "friday": console.log("8.50");
                break ;
            case "saturday": console.log("15");
                break ;
            case "sunday": console.log("15");
                break ;
            default:
                console.log("error");
                break;
        }
    }else if (lowerCaseTitle == "casablanca"){
        switch (dayOfTheWeek){
            case "monday": console.log("8");
                break ;
            case "tuesday": console.log("8");
                break ;
            case "wednesday": console.log("8");
                break ;
            case "thursday": console.log("8");
                break ;
            case "friday": console.log("8");
                break ;
            case "saturday": console.log("10");
                break ;
            case "sunday": console.log("10");
                break ;
            default:
                console.log("error");
                break;
        }
    }
    else if (lowerCaseTitle == "the wizard of oz"){
            switch (dayOfTheWeek){
                case "monday": console.log("10");
                    break ;
                case "tuesday": console.log("10");
                    break ;
                case "wednesday": console.log("10");
                    break ;
                case "thursday": console.log("10");
                    break ;
                case "friday": console.log("10");
                    break ;
                case "saturday": console.log("15");
                    break ;
                case "sunday": console.log("15");
                    break ;
                default:
                    console.log("error");
                    break;
        }
    }
    else {
        console.log("error")
    }
}

moviePricesDepengingOfTheWeek(["The Godfather", "Friday"]);
moviePricesDepengingOfTheWeek(["casablanca", "sunday"]);
moviePricesDepengingOfTheWeek(["Schindler's LIST", "monday"]);
moviePricesDepengingOfTheWeek(["SoftUni", "Nineday"]);
