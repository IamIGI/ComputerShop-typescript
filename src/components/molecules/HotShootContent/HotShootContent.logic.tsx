const isZeroNeeded = (time: number, timeToEnd: string): string => {
    if (time < 10) {
        timeToEnd = '0' + timeToEnd;
    }
    return timeToEnd;
};

export const TimerCount = (): [string, string, string] => {
    const date = new Date();
    const seconds = 59 - date.getSeconds();
    const minutes = 59 - date.getMinutes();
    let hours = 0;
    if (date.getHours() >= 22 && date.getHours() <= 23) {
        hours = 33 - date.getHours();
    } else if (date.getHours() >= 0 && date.getHours() <= 9) {
        hours = 9 - date.getHours();
    } else {
        hours = 21 - date.getHours();
    }
    let hoursToEnd = hours.toString();
    let secondsToEnd = seconds.toString();
    let minutesToEnd = minutes.toString();

    secondsToEnd = isZeroNeeded(seconds, secondsToEnd);
    minutesToEnd = isZeroNeeded(minutes, minutesToEnd);
    hoursToEnd = isZeroNeeded(hours, hoursToEnd);

    return [hoursToEnd, minutesToEnd, secondsToEnd];
};
