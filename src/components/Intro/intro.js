import React from 'react'
import "./intro.css";
import bg from '../../assets/image.png';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png'

const intro = () => {
  return (
    <section id="intro">
      <div className='introContent'>
        <span className='hello'>Hello, </span>
        <span className='introText'>I'm <span className='introName'>VARSHINI NIDAGUNDI, </span>Intern.</span>
        <p className='introPara'>lorem lorem lorem lorem lorem lorem lorem br<br/> lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
        <Link><button className="btn"><img src={btnImg} alt="" className='btnImg'/>Click here</button></Link>
      </div>
      <img src={bg} alt="profile" className="bg"/>
    </section>
  )
}

export default intro