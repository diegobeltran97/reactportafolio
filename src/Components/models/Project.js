import React, { Component } from 'react'
import { Slide } from 'react-slideshow-image';
import "../../Utilities/css/Projects.css";

export default class Project extends Component {
    render() {

        const slideImages = [
            'images/slide_2.jpg',
            'images/slide_3.jpg',
            'images/slide_4.jpg'
          ];
       
        const properties = {
           
            infinite: false,
            indicators: true,
            arrows: true,
            onChange: (oldIndex, newIndex) => {
              console.log(`slide transition from ${oldIndex} to ${newIndex}`);
            }
          }

        return (
            <div>
                <div className="Container">
                    <p><span className="titulo">{this.props.titulo}</span>{this.props.description}</p>
                
                    <Slide {...properties}>
                        <div className="each-slide">
                        <div style={{'backgroundImage':  `url(${slideImages[0]})`}}>
                            <span>Slide 1</span>
                        </div>
                        </div>
                        <div className="each-slide">
                        <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                            <span>Slide 2</span>
                        </div>
                        </div>
                        <div className="each-slide">
                        <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                            <span>Slide 3</span>
                        </div>
                        </div>
                    </Slide>
                </div>
            </div>
        )
    }
}
