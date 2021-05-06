import moment from "moment";

class Order {
    constructor(id, items, totalAmount, date) {
        this.id = id;
        this.items = items;
        this.totalAmount = totalAmount;
        this.date = date;
    }
   //Moment Packages Installed
   
    get readableDate() {
        return moment(this.date).format('Do MMMM YY, hh:mm a');
    }
}

export default Order;