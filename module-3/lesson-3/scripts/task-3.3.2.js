function drinkOrder (size, drink) {

    switch(drink) {

        case 'cola' :
            console.log('You have ordered a  ' + size + '  ' drink);
            break; 

            case 'lemonade'  :
                console.log('You have ordered a ' + size + '  ' drink);
                break;

                case 'cherryade' :
                    console.log('You have ordered a ' + size + '  ' drink);
                    break;

                    default:
                    console.log('error');
                    break;

    }
}


drinkOrder ('small', 'cherryade');