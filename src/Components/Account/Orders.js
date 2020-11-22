import React, { Component } from "react";
import "./orders.css";
import { Chevdown, Chevright } from "../Icons/Index";
class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          image: require("../../images/orders.png"),
          title: "Madeup White Cotton Blend",
          titlebr: "Checked Slim Fit Shirt",
          orderId: "Order #12345678",
          delivery: "Sat,Aug 30",
          payment: "Credit Card Payment",
          dispatch: "Pending",
        },
        {
          image: require("../../images/orders.png"),
          title: "Madeup White Cotton Blend",
          titlebr: "Checked Slim Fit Shirt",
          orderId: "Order #12345678",
          delivery: "Sat,Aug 31",
          payment: "Credit Card Payment",
          dispatch: "Pending",
        },
        {
          image: require("../../images/orders.png"),
          title: "Madeup White Cotton Blend",
          titlebr: "Checked Slim Fit Shirt",
          orderId: "Order #12345678",
          delivery: "Sat,Aug 16",
          payment: "Credit Card Payment",
          dispatchDel: "Delivered",
        },
        {
          image: require("../../images/orders.png"),
          title: "Madeup White Cotton Blend",
          titlebr: "Checked Slim Fit Shirt",
          orderId: "Order #12345678",
          delivery: "Sat,Aug 15",
          payment: "Credit Card Payment",
          dispatchDel: "Delivered",
        },
      ],
    };
  }
  render() {
    return (
      <div className="orders">
        <div className="header">My Orders</div>
        {this.state.data.map((card, i) => (
          <Card
            key={i}
            image={card.image}
            title={card.title}
            titlebr={card.titlebr}
            orderId={card.orderId}
            deliv={card.delivery}
            pay={card.payment}
            dispatch={card.dispatch}
            dispatchdel={card.dispatchDel}
          />
        ))}
      </div>
    );
  }
}
const Card = ({
  image,
  title,
  titlebr,
  orderId,
  deliv,
  pay,
  dispatch,
  dispatchdel,
}) => {
  return (
    <div className="order-container">
      <div className="order-image">
        <img src={image} />
      </div>
      <div>
        <p>{orderId}</p>
        <h4 className="order-text">
          {title}
          <br />
          {titlebr}
        </h4>
        <div className="del-text">
          <p>Express Delivery {deliv}</p>
        </div>
      </div>
      <div className="pay-text">
        <p>{pay}</p>
        <h1 className="order-text">Rs 1,899</h1>
        <div className="chevDown"><Chevdown/></div>
        <p className={`${dispatch === "Pending" ? "pending" : "pending-hide"}`}>
          {dispatch}
        </p>
        <p
          className={`${
            dispatchdel === "Delivered" ? "deliverd" : "pending-hide"
          }`}
        >
          {dispatchdel}
        </p>
      </div>
      <div className="pay-text-res">
        <p>{pay}</p>
        <h1 className="order-text">Rs 1,899</h1>
        <p className={`${dispatch === "Pending" ? "pending" : "pending-hide"}`}>
          {dispatch}
        </p>
        <p
          className={`${
            dispatchdel === "Delivered" ? "deliverd" : "pending-hide"
          }`}
        >
          {dispatchdel}
        </p>
      </div>
    </div>
  );
};
export default Orders;
