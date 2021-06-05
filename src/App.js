import {Component} from 'react'
import './App.css';
import {Link} from 'react-router-dom';
import image1 from './images/1stw.png';
import image2 from './images/2ndw.svg';
import image3 from './images/3rdw.svg';

class App extends Component{
    index=()=>{
    var walkContainer = document.getElementById("walk-container")
    var index1 = document.getElementById("index1")
    var index2 = document.getElementById("index2")
    var index3 = document.getElementById("index3")
    if(walkContainer.scrollLeft>=0&&walkContainer.scrollLeft<=20){
        index1.classList.add('active')
        index2.classList.remove("active")
        index3.classList.remove("active")
    }
    else if(walkContainer.scrollLeft>=340&&walkContainer.scrollLeft<=360){
        index2.classList.add('active')
        index1.classList.remove("active")
        index3.classList.remove("active")
    }
    else if(walkContainer.scrollLeft>=700){
        index3.classList.add('active')
        index1.classList.remove("active")
        index2.classList.remove("active")
    }
    }
  render(){
    return(
      <div className="walk-container" id="walk-container" onScroll={this.index}>
    <div className="walk-pages" id="page1"> 
        <div className="walk-text">
            <h2>Well designed Templates</h2>
            <p>Thousands of professional templates are available for free</p>
        </div>
        <img src={image1} className="image-1"alt=""/>
        <Link to="/signin" className="getstart">Get Started</Link>
    </div>
    <div className="walk-pages" id="page2">
        <div className="walk-text">
            <h2>Easy to Edit</h2>
            <p>Every template is editable and highly customizable</p>
        </div>
        <img src={image2} alt="" className="image-2"/>
        <Link to="/signin" className="getstart">Get Started</Link>
    </div>
    <div className="walk-pages" id="page3">
        <div className="walk-text">
            <h2>Easy to export</h2>
            <p>Save your work in your phone and Editable file will be available for life time</p>
        </div>
        <img src={image3} alt="" className="image-3"/>
        <Link to="/signin" className="getstart">Get Started</Link>
    </div>
    <div className="pagination">
        <span className="active" id="index1">•</span>
        <span id="index2">•</span>
        <span id="index3">•</span>
    </div>
</div>
    )
  }
}

export default App;
