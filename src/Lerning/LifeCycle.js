import React from 'react';
 import { Link } from 'react-router-dom' 


class LifeCycle extends React.Component {
	// // LifeCylce Component :- componentDidMount
	// constructor(props) {
	// 	super(props);
	// 	this.state = {favoritecolor: "red"};
	// }
	// 	componentDidMount() {
	// 		setTimeout(() => { 
	// 			this.setState({favoritecolor: "yellow"})
	// 		}, 1000)
	// 	}

	// 	render() {
	// 		return (
	// 			<h1>My Favorite Color is {this.state.favoritecolor}</h1>
	// 			);	
	// 		}
	// 	}


    // LifeCycle Component := shouldComponentUpdate 
	// In the shouldComponentUpdate() method you can return a Boolean value that specifies whether 
	// React should continue with the rendering or not
	// shouldComponentUpdate() {
	// 	return true;
	// }

    
//     LifeCycle Component :- getSnapshotBeforeUpdate()
// 	constructor(props) {
// 		super(props);
// 		this.state = {favoritecolor: "red"};
// 	}
// 	componentDidMount() {
// 		setTimeout(() => {
// 			this.setState({favoritecolor: "yellow"})
// 		}, 1000)
// 	}
// 	getSnapshotBeforeUpdate(prevProps, prevState) {
// 		document.getElementById("div1").innerHTML =
// 		"Before the update, the favorite was " + prevState.favoritecolor;
// 	}
// 	// componentDidUpdate() {
// 	// 	document.getElementById("div2").innerHTML =
// 	// 	"The updated favorite is " + this.state.favoritecolor;
// 	// }
// 	render() {
// 		return (
// 			<div>
// 			<h1>My Favorite Color is {this.state.favoritecolor}</h1>
// 			<div id="div1"></div>
// 			<div id="div2"></div>
// 			</div>
// 			);
// 	}
// }

 // LifeCycle Component:- componentDidUpadate()
 // constructor(props) {
 //    super(props);
 //    this.state = {favoritecolor: "red"};
 //  }
 //  //  componentDidMount() {
 //  //   setTimeout(() => {
 //  //     this.setState({favoritecolor: "yellow"})
 //  //   }, 1000)
 //  // }
 //  changeColor=()=>{
  	
 //     this.setState({favoritecolor:"black"});
 //   }
 //  componentDidUpdate() {
 //    document.getElementById("mydiv").innerHTML =
 //    "The updated favorite is " + this.state.favoritecolor;
 //  }
 //   render() {
 //    return (
 //      <div>
 //      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
 //      <div id="mydiv"></div>
 //      <button type="button" onClick={this.changeColor}>clickme</button>
 //      </div>
 //    );
 //  }


  constructor(props) {
    super(props);
    this.state = {show: true};
  }
  delHeader = () => {
    this.setState({show: false});
  }
  render() {
    let myheader;
    if (this.state.show) {
      myheader = <Child />;
    };
    return (
      <div>
      {myheader}
      <button type="button" onClick={this.delHeader}>Delete Header</button>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }
  render() {
    return (
      <div>
      <h1>LifeCycle!</h1>
       <ul className="App-header">
                 <li>
                   <Link to="/">Home</Link>
                 </li> 
                 <li>
                   <Link to="/about">About Us</Link>
                 </li>
                 <li>
                   <Link to="/contact">Contact Us</Link>
                 </li>
                  <li>
                   <Link to="/Services">Form</Link>
                 </li> 
                 <li>
                   <Link to="/Lifecycle">LIfeCycle</Link>
                 </li>
                  <li>
                   <Link to="/Props1">Props1</Link>
                 </li>
                  <li>
                   <Link to="/Props2">Propse2</Link>
                 </li>

               </ul>
               </div>
    );
  }

}
	export default LifeCycle;