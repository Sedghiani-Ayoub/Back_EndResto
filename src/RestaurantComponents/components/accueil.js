import { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const msg = <h2 style={{ textAlignt: "center" }}>"Welcome to Golden Restaurant, the platform you desire."</h2>
class Accueil extends Component {

    render() {
        return (
            <div className="container">
                <div className="card" style={{ background: 'linear-gradient(to bottom, #FFD700, #FFA500)' }}>
                    <div className="card-header" style={{ background: '#FFD700' }}>
                        <h2 className="mb-0 text-center"><label style={{ color: '#8B4513', textAlign: 'rigth'}}>Golden Restaurant</label></h2>
                    </div>
                    <div className="card-body" style={{ color: '#8B4513' }}>
                        <p className="card-text text-center">{msg}</p>
                    </div>

                </div>
                <div>
                    <Carousel autoPlay={true} interval={1500} infiniteLoop={true} showThumbs={false}>
                        <div>
                            <img src="image1.jpeg" alt="resto" height={600} width={200} />
                            <h3 className="legend"> Craft your own restaurant</h3>
                        </div>
                        <div>
                            <img src="image2.jpeg" alt="food1" height={600} width={200} />
                            <h3 className="legend">Create your Menu</h3>
                        </div>
                        <div>
                            <img src="image3.jpeg" alt="food2" height={600} width={200} />
                            <h3 className="legend">Manage your service</h3>
                        </div>
                    </Carousel>
                </div>
            </div>
        );
    }

}

export default Accueil;