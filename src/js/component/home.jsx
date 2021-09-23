import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//import Ricardo's Carousel component
import { Navbrb } from "./navbrb.jsx";
import NewCarouselRicardo from "./newCarouselRicardo.jsx";
import Carta from "./carta.jsx";
import AboutUs from "./aboutUs.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbrb />
			<NewCarouselRicardo />
			<Carta />
			<AboutUs />
		</div>
	);
};

export default Home;
