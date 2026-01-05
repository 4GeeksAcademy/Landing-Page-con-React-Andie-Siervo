import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Welcome from "./Welcome";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
            
            <Navbar></Navbar>
			<Welcome></Welcome>
		</div>
	);
};

export default Home;