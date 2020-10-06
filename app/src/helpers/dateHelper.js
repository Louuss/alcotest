class DateHelper {
    static timestampToStringDate(date) {
        let day = date.getDate();
        let month = date.getMonth();
        let year = date.getYear();
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

        if (day < 10)
            day = '0' + day;

        return months[parseInt(month)] + ' ' + day + ' of ' + year
    }


}
export default DateHelper
