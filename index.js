// Code your solution in this file!
function distanceFromHqInBlocks(blocksAway) {
    return Math.abs(blocksAway - 42)
}
distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);

function distanceFromHqInFeet(feetAway) {
    return Math.abs((feetAway - 42) * 264);
}
distanceFromHqInFeet(43);
distanceFromHqInFeet(50);
distanceFromHqInFeet(34);

function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
}
distanceTravelledInFeet(43, 48);
distanceTravelledInFeet(50, 60);
distanceTravelledInFeet(34, 28);

function calculatesFarePrice(start, destination) {
    if ((Math.abs(destination - start) * 264) <= 400) {
        return 0
    } else if ((Math.abs(destination - start) * 264) >=400, 
    (Math.abs(destination - start) * 264) <= 2000) {
        return (((Math.abs(destination - start) * 264) - 400) * 0.02)
    } else if ((Math.abs(destination - start) * 264) <= 2500) {
        return 25
    } else if ((Math.abs(destination - start) * 264) > 2500) {
        return 'cannot travel that far'
    }
}
calculatesFarePrice(43, 44);
calculatesFarePrice(34, 32);
calculatesFarePrice(50, 58);
calculatesFarePrice(34, 24);