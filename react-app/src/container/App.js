import React, { Component } from 'react';
import './App.less';
import Persons from '../components/persons/persons';
class App extends Component {
  state={
    person:[
       {"name":"小鱼","code":96,id:1},
       {"name":"小马","code":86,id:2},
       {"name":"小路","code":76,id:3}
    ],
    other:"any",
    showPersons:false,
  }
  changeCode=(newName)=>{
    this.setState({
      person:[
        {"name":newName,"code":100,id:1},
        {"name":"小马牛","code":116,id:2},
        {"name":"小路","code":76,id:3}
     ]
    })  
  }
  changeValue=(event,id)=>
    {
      const personIndex=this.state.person.findIndex(p=>{
        return p.id===id
      })
      const personItem={...this.state.person[personIndex]};
      personItem.name=event.target.value;
      const persons=[...this.state.person]
      persons[personIndex]=personItem;
      this.setState({
        person:persons
    })     
    }
  toggleShowFlag=()=>{
      const doseShow=this.state.showPersons;
      this.setState({showPersons:!doseShow})
      
  } 
  deleteSelf=(index)=>{ 
    // const personObj=this.state.person;
    const personObj=[...this.state.person];
    personObj.splice(index,1);
    this.setState({
        person:personObj
    })
  }
 render() {
    const style={
      width:200,
      height:40,
      backgroundColor:"yellow",
      border:"1px dotted red",
      marginLeft:"50px",
      cursor:"pointer"
    }
    const classes=[];

    if(this.state.person.length<=2){
      classes.push("red")
    }
    if(this.state.person.length<=1){
      classes.push("bold")
    }
    let persons=null;
    if(this.state.showPersons){
      persons=<Persons
                persons={this.state.person}
                clicked={this.deleteSelf}
                changed={this.changeValue}
              />
      style.backgroundColor="red"
      
      // (
      //   <div>
      //     {
      //       this.state.person.map((personItem,index)=>{
      //         return <Person name={personItem.name} code={personItem.code} key={index} myClick={()=>this.deleteSelf(index)} changed={(event)=>this.changeValue(event,personItem.id)}/>
      //       })
      //     }
      //     {/* <Person name={this.state.person[0].name} code={this.state.person[0].code} changed={this.changeValue}/>
      //     <Person name={this.state.person[1].name} code={this.state.person[1].code} myClick={this.changeCode.bind(this,"小虾米")}/>
      //     <Person name={this.state.person[2].name} code={this.state.person[2].code}>今天六一儿童劫</Person> */}
      //   </div>
      // )
    }
    return (
      <div className="App">
        <p className="App-intro">你好</p>
        <p className={classes.join(" ")}>hello,world!!</p>
        {/* <button onClick={()=>this.changeCode("长藤")}>点击我！！</button> */}
        <button onClick={this.changeCode.bind(this,"长青")} style={style}>点击我！！</button>
        <button onClick={this.toggleShowFlag} style={style}>内容切换</button>
        {persons}
        {/* {
          this.state.showPersons? 
          <div>
            <Person name={this.state.person[0].name} code={this.state.person[0].code} changed={this.changeValue}/>
            <Person name={this.state.person[1].name} code={this.state.person[1].code} myClick={this.changeCode.bind(this,"小虾米")}/>
            <Person name={this.state.person[2].name} code={this.state.person[2].code}>今天六一儿童劫</Person>
          </div> : ""
        } */}
      </div>
    );
  }
}
export default App;
