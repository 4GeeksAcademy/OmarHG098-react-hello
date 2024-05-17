import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="container mx-auto row gap-2 justify-content-center">
					<Card/>
					<Card/>
					<Card/>				
					<Card/>
					<Card/>
					<Card/>
					<Card/>
					<Card/>				
					<Card/>
				</div>
			</div>
		</>
	);
};
console.log("Something changed!");
export default Home;

