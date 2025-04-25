enum DayOfWeek {
 Monday,
 Tuesday,
 Wednesday,
 Thursday,
 Friday,
 Saturday,
 Sunday
}

// console.log(DayOfWeek);

const isWeekend = (day: DayOfWeek) => {
    if (day === DayOfWeek.Saturday || day === DayOfWeek.Sunday) {
        return true;
    }
    else {
        return false;
    }
}

// console.log(isWeekend(DayOfWeek.Monday));
// console.log(isWeekend(DayOfWeek.Sunday));

export { isWeekend };