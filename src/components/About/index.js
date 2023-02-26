import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  return (
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters strArray={['A','b','o','u','t',' ','m','e']} idx={15} />

        </h1>
        <p>
          how ambitious I am
        </p>
        <p>
          how confident I am
        </p>
        <p>
          how humble I am
        </p>
        <p>
          one sentence definition
        </p>
      </div>
    </div>
  )
}

export default About
