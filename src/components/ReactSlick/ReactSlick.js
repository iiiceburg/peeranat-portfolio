import React from "react";
import Slider from "react-slick";

export default function ReactSlick(props) {
    // let settings = { ...props.setting};
    return (
        <Slider {...props.setting}>
            {props.data}
        </Slider>
    );
}