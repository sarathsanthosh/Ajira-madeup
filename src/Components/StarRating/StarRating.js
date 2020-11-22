import React from "react";
import "./starrating.css";

class StarRating extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            stars: [],
            rating: 0,
            hovered: 0,
            selectedIcon: "★",
            deselectedIcon: "☆"
        };

        let outOf = props.outOf ? props.outOf : 5;

        for (var i = 0; i < outOf; i++) {
            this.state.stars.push(i + 1);
        }
    }

    changeRating(newRating) {
        this.setState({
            rating: newRating
        });

        if (this.props.onChange)
            this.props.onChange(newRating);
    }

    hoverRating(rating) {
        this.setState({
            hovered: rating
        });
    }

    render() {

        const { stars, rating, hovered, deselectedIcon, selectedIcon } = this.state;

        return (
            <div>
                <div className="rating" style={{ fontSize: '1.5em', color: "#FDC02F",float:"right",marginTop:"-2rem" ,marginRight:"1rem"}}>

                    {stars.map(star => {
                        return (
                            <span
                                style={{ cursor: 'pointer' }}
                                onClick={() => { this.changeRating(star); }}
                                onMouseEnter={() => { this.hoverRating(star); }}
                                onMouseLeave={() => { this.hoverRating(0); }}
                            >
                                {rating < star ?
                                    hovered < star ? deselectedIcon : selectedIcon
                                    :
                                    selectedIcon
                                }
                            </span>
                        );
                    })}

                </div>
            </div>
        );
    }
}
export default StarRating;