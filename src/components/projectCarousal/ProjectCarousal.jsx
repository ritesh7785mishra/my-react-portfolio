
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './projectCarousal.css'
import bus1 from "../../assets/bus1.png"
import bus2 from "../../assets/bus2.png"
import bus3 from "../../assets/bus3.png"
import bus4 from "../../assets/bus4.png"
import bus5 from "../../assets/bus5.png"
import bus6 from "../../assets/bus6.png"
import bus7 from "../../assets/bus7.png"


const ProjectCarousal = () => {

    return (
        <section className='project-carousal-section'>
            <Carousel className='section project-carousal'
                autoPlay={true}
                infiniteLoop={true}
                interval={3000}
            >
                <div>
                    <img src={bus1} />
                    <p className="legend">Welcome Screen</p>
                </div>
                <div>
                    <img src={bus2} />
                    <p className="legend">Login Page</p>
                </div>
                <div>
                    <img src={bus3} />
                    <p className="legend">Loading...</p>
                </div>
                <div>
                    <img src={bus4} />
                    <p className="legend">Location of busus on map</p>
                </div>
                <div>
                    <img src={bus5} />
                    <p className="legend">Conductor sending location of buses</p>
                </div>
                <div>
                    <img src={bus6} />
                    <p className="legend">Admin dashboard</p>
                </div>
                <div>
                    <img src={bus7} />
                    <p className="legend">Adding conductors</p>
                </div>
            </Carousel >
        </section>

    );

}

export default ProjectCarousal