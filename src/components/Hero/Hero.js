
import './hero.css'
import Typical from "react-typical";

function hero() {
  return (
    <div className='hero'>
      
      <div className="profile-container">
        <div className="profile-info">
          <div className="profile-name">
            <h1>
              <span className="texto"> Hello, my name is </span>
            </h1>
          </div>
          <div className="profile-name2">
            <h2>
              <span className="minombre">Gerard Álvarez Izquierdo</span>
            </h2>
          </div>
          <div className="profile-efecto">
            <span>
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Software developer",
                    1000,
                    "Engineering student",
                    1000,
                    "Nice guy ;)",
                    1000,
                    "Maricona",
                    1000,
                  ]} />
              </h1>
            </span>
          </div>
          <div>
            <p className="desc">
              I’m a software engineer specializing in building and occasionally
              designing exceptional digital experiences. Currently, I’m focused
              on building 
            </p>
          </div>
        </div>
      
    </div>
    
    </div>
  )
}

export default hero