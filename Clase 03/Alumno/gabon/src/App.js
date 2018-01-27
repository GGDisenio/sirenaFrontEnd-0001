import React, { Component } from 'react';
import { Title, SubTitle, HeadLine } from './Typography';
import { ListItem, List, OrderList } from './List';
import { Button, CheckButton, CounterButton, HoverButton } from './Button';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    // return <AnimatedImage src={logo}/>
    // return <Header />

    return <div className={"App"} style={{ background: "#DDD" }}>
      <Header>
        <Button>Esto es un Botton</Button>
        <CheckButton>Esto es un Botton</CheckButton>      
      </Header>
    </div>



    // return (
    //   React.createElement('div',{className:'App', style: {background:'#DDD'}}, [
    //     React.createElement(Header, {}, null),
    //     React.createElement(Text, {}, null)
    //   ])      
    //  );
  }
}

export default App;

// class Header extends Component{
//   render(){
//     return <header className="App-header"> {this.props.children} </header>
//   }
// }

function Header(props) {
  return <header className="App-header"> {props.children} </header>
}

// class Title extends Component{
//   render(){
//     return <h1 className="App-title"> {this.props.children} </h1>  
//     }
// }


// class Body extends Component{
//   render(){
//     return <p className="App-Intro"> Soy el Body </p>
//   }
// }

function Body(props) {
  return <p className="App-Intro"> Soy el Body </p>
}

// class AnimatedImage extends Component{
//   render(){
//     return <img className="App-logo" src={logo} />
//   }
// }

function AnimatedImage(props) {
  return <img className="App-logo" src={logo} />
}

