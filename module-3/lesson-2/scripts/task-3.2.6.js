var temperature = 49;
if (temperature < 0 ) {
document.write('Stay inside please'); 
} else if (temperature < 30 ) {
document.write('Please put on a coat and hat'); 
} else if (temperature < 50) {
    document.write('Please put on a coat');
} else {
    document.write('No need for a hat or coat')
}
var temperature = 40;
var season = 'spring';

if (temperature < 45 && season === 'spring') {
document.write ('A coat is optional')
}
