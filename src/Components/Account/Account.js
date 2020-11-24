import React, { Component, useState } from "react";
import "./account.css";
import "../../fonts/jost.css";
import profile from "../../images/profile.png";
import Form from "./Form";
import Orders from "./Orders";
import { Chevright , Chevdown, Chevup } from "../Icons/Index";

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { title: "My Profile", subtext: "Notification Passwords" },
        { title: "My orders", subtext: "You have 12 notifications" },
        { title: "Shipping addresses", subtext: "3 dresses" },
      ],
      target: "My Profile",
    };
  }
  handleClick(value) {
    this.setState({
      target: value,
    });
  }
  render() {
    return (
      <div className="profile">
        <nav>
          <div className="pathNav">
            <p>Home / My Profile</p>
          </div>
          <div className="profile-card">
            <div>
              <img src={profile} />
            </div>
            <div>
              <h5 className="profile-card-header">Grishk</h5>
              <p>griskim@gmail.com</p>
            </div>
          </div>
          {this.state.data.map((card, i) => (
            <Card
              val={{ handleClick: this.handleClick.bind(this, card.title) }}
              key={i}
              title={card.title}
              subtext={card.subtext}
            />
          ))}
        </nav>
        <article className="form-order">
          {this.state.target === "My Profile" && <Form />}
          {this.state.target === "My orders" && <Orders />}
        </article>
      </div>
    );
  }
}
const Card = ({ val, title, subtext }) => {
  const [target, setTarget] = useState();
  const [open, setOpen] = useState(true);
  const [chev, setChev] = useState(true);

  const handleAddValue = () => {
    const newValue = title;
    setTarget(newValue);
    setOpen(!open);
  };
  const chevToggle = () =>{
    setChev(!chev);
  }
  return (
    <div>
      <div onClick={val.handleClick} value={title} className="card">
        <div className="card-container">
            <span >{title}</span>
          <p>{subtext}</p>
        </div>
        <div onClick={chevToggle} className="chevRight">
          <Chevright />
        </div>
      </div>
      <div onClick={handleAddValue} className="account-responsive">
        <div className="card-container">
          <h4>
            <b>{title}</b>
          </h4>
          <p>{subtext}</p>
        </div>
        <div  onClick={chevToggle} className="chevUp">
          {chev === true ?<Chevdown/>:<Chevup/>}
        </div>
        <div className={`${!open ? "account-slidedown" : "account-slidehide"}`}>
          {target === "My Profile" && <Form />}
          {target === "My orders" && <Orders />}
        </div>
      </div>
    </div>
  );
};
export default Account;
