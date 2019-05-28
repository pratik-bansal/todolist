import React from 'react';
import PropType from 'prop-types';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/papercss/dist/paper.css';
import './Animated.css';
//import '../node_modules/bootstrap/dist/js';
import ani from "./ani.jpg";
import cover from "./cover.png";
import bag from "./bag.png";
import ProgressBar from '../node_modules/react-bootstrap/ProgressBar';
//import React, { Component } from 'react';
//import DecoratedProgressBar from '../progress.js';
//import Navbar from 'react-bootstrap/Navbar';


class IList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newValue: "",
      arr: [],
      sa: {},
      cout:0,
      clickd:0,
      counter:0,
      cpin:0
    };
    //console.log("list",this.state.arr);
   // var count=0;
   //this.selectsort = this.selectsort.bind(this);
  }
   

  item() {

    return this.state.arr.map((its,i) => <div className="row" >
     <button className="row   btn-primary btn-danger animated infinite  bounce button4" id="but5" onClick={(its)=>{this.aescsorting(i)}}>ASCSort</button>
     <button className="row   btn-primary btn-danger animated infinite  bounce button6"  onClick={(its)=>{this.descsorting(i)}}>DECSort</button>
     <div className="row">
    <li className={its.status?"row btn btn-success paper-btn btn-block animated rotateInDownLeft":"row btn  paper-btn btn-block animated rotateInDownLeft"} id="li1"  onClick={(its)=>{this.changestatus(i)}}  onDoubleClick={(its)=>{this.odubleClick(i)}} > {its.name}<span className="sp">{its.date}{its.time}</span></li>
    <button className="row   btn-secondary animated infinite bounce button1" id="but1" onClick={()=>{this.change(i,"up")}}>UP</button>
    <button className="row  btn-primary animated infinite bounce button2"  onClick={()=>{this.change(i,"dow")}}>Down</button>
    <button className="row btn-danger animated infinite  bounce button3"  onClick={()=>{this.delete(i)}}>Delete</button>
    </div>

    
    </div>)
  }
 
 


  aescsorting(i) {
    let arrsort = this.state.arr;
    let s = arrsort.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
    this.setState({ arr: s })
  }

  //sorting in desc
  descsorting(i) {
    let arrsortd = this.state.arr;
    let t = arrsortd.sort((a, b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase()))
    this.setState({ arr: t })
}
// selectsort() {
//   let arrsortselect = this.state.arr;
//   console.log(arrsortselect)
//   let z = arrsortselect.sort((a, b) => a.status === false ? -1 : b.status === false ? 1 : 0)
//   this.setState({ arr: z })
// }
  odubleClick(i){
    let localar=this.state.arr;
     var cl=this.state.clickd;
     var len=(localar.length)-1;
    localar[i].status = !localar[i].status;
    if(localar[i].status==true){
      cl++;
    }
    
    if(cl==1){
      //var flag=localar[i];
      [localar[i],localar[len]]=[localar[len],localar[i]];
      localar[i].status = !localar[i].status;
    }

    this.setState(
      {arr:localar,
       //clickd:cl 
      }
    );

  }
  
  

  header() {
    
  return <div><img src={ani} alt="anipic" className="cover" width="100%" /></div>;
  }
  bag1() {
    
    return<center> <img src={bag} alt="Bag" className="bag img-rounded imgs" width="20%"/></center>;
    }

  
  delete(i){
    var de=this.state.arr;
    
    de.splice(i,1);
    this.setState(
      {arr:de
      });

  }

   change(i,str){
   
    var upp=this.state.arr;
   
     if(str==="dow"){
      
       if(i+1<this.state.arr.length){
        
        [upp[i+1],upp[i]]=[upp[i],upp[i+1]];
       }
       else{
         alert("not valid")
       }
     }
     else if(str==="up"){
       if(i-1>-1){
        [upp[i-1],upp[i]]=[upp[i],upp[i-1]];
       }
       else{
         alert("Not Valid");
       }
      }
       this.setState(
        {arr:upp
        });
     
      }
     
  


  changestatus(i){
    var localarr=this.state.arr;
     let c=this.state.cout;
     
    localarr[i].status = !localarr[i].status;
    if(localarr[i].status==true){
      c++;
    }
    else{
      c--;
    }
    
    this.setState(
      {arr:localarr,
       cout:c 
      }
    );
    
   
    
  }
  getValue(event) {
    var cc=this.state.counter;
    this.setState({ newValue: event.target.value,counter:cc });

  }


  setValue() {
    let date=new Date();
    let d=date.toDateString();
    let time=date.toLocaleTimeString();
    var pp = this.state.arr;
    if(this.state.newValue==""){
      alert("enter the value");

    }
    else{
      pp.push({ name: this.state.newValue,status:false,date:d,time:time });

    }
   
    //console.log(pp);
    this.setState({ arr: pp, newValue: "" });
    let i = document.getElementById("hi");
    i.value = "";
  }



  render() {
    return (<div className="bod">
    <body className="bod1">
      
     
      <h1 className="row flex-center animated infinite heartBeat hh">to do list</h1>
      <div className=" animated infinite bounce">
      {this.bag1()}
     </div>
      <input className="row flex-center animated rotateInDownLeft" type="text" maxLength="50" id="hi" onChange={(event)=>{this.getValue(event)}} />
      <button className="row flex-center  btn btn-primary animated infinite bounceIn bg-backgroundColor:blue" onClick={()=>{this.setValue()}}>ADDToBag</button>
      <h2 className="row flex-center animated  zoomIn tt">Total Items :{this.state.cout} /{this.state.arr.length}</h2>
     <div className="row">
     <ProgressBar>
      <ProgressBar now={70} striped variant='success'/>
      </ProgressBar>
      {/* <button onClick={()=>{this.selectsort()}} className="row animated infinite bounce buttn1">SelectSort</button> */}
      </div>
      <ul classNane="animated infinite bounceInDown">
        {this.item()}
        
      </ul>

      {this.header()}
      </body>
    </div>
    );
  }
}



function App() {
  return <div>
    <IList list={[]} />
  </div>

}

export default App;
