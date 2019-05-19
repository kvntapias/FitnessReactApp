import React from 'react';
//Imagen
import ExcerciseImg from '../images/exercise.png';
//Estilos
import './styles/Card.css';
import circlesImage from '../images/circles.png';
import { setTimeout } from 'timers';

class Card extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            image: 'https://cdn.pixabay.com/photo/2016/12/20/02/51/cloud-1919600_960_720.png'
        }
    }

    componentDidMount(){
        setTimeout(() =>{
            this.setState({
                image : ExcerciseImg
            })
        }, 5000);
    }

    render() {
        const {title,description,img, leftColor, rightColor} = this.props
        return (
            <div className="card mx-auto Fitness-Card"
            style={{
                backgroundImage: `url(${circlesImage}), linear-gradient(to right, ${leftColor}, ${rightColor})`
            }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img className="float-right" alt="img-excercise" src={this.state.image} />
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card