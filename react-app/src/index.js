import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Link,Route,HashRouter,Switch} from 'react-router-dom'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
  render(){
    return(
      <div>
        <h1>react demo</h1>
        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Inbox">Inbox</Link></li>
        </ul> 
        {this.props.children} 
      </div>
    )
  }
}

const About=()=>{
  <div>
    <h3>About</h3>
  </div>
}
const Home=()=>{
  <div>
    <h3>Home</h3>
  </div>
}
const Message = ({ match }) => (
  <div>
    <h3>new messages</h3>
    <h3>{match.params.id}</h3>
  </div>
)
const Inbox = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <Route path={`${match.url}/messages/:id`} component={Message}/>

  </div>
) 

ReactDOM.render(
  <HashRouter>
    <App>
      <Route path='/' component={Home}></Route>
      <Route path='/about' component={About}></Route>
      <Route path='/inbox' component={Inbox}></Route>
    </App>
  </HashRouter>, 
  document.getElementById('root'));
registerServiceWorker()
