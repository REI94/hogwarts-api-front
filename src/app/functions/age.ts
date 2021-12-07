export function getAge(dateString: string) {

  if(dateString) {
    //It takes today's date
    const today = new Date();

    //Now the string with the format days-month-year is separated into an array of 3 values.
    const dayMonthYear = dateString.split("-");

    let age = today.getFullYear() - Number(dayMonthYear[2]);
    let m = today.getMonth() - Number(dayMonthYear[1]);

    //Count of days
    if (m < 0 || (m === 0 && today.getDate() < Number(dayMonthYear[0]))) {
        age--;
    }

    return age;
  }
  else {
    return NaN;
  }
}
