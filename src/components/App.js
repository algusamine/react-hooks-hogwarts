import React from "react";
import Nav from "./Nav";
import Hogs from "./Hogs"

import hogs from "../porkers_data";
console.log(hogs.image)

function App() {

	return (
		<div className="App">
			<Nav />
			<Hogs hogs={hogs} />
		</div>
	);
}

export default App;
