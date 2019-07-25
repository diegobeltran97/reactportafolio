import React, { Component } from 'react'
import { Slide } from 'react-slideshow-image';
import "../../Utilities/css/Projects.css";

export default class Project extends Component {
    render() {

        const slideImages = [ this.props.imagen ] ;
        
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
                <div className="Container" style={ { 'backgroundColor': this.props.color }}>
                    <p className="titulo">{this.props.titulo}</p>
                
                    <Slide {...properties}>
                        <div className="each-slide">
                        <div style={{'backgroundImage':  `url(${slideImages[0][0]})`}}>
                            
                        </div>
                        </div>
                        <div className="each-slide">
                        <div style={{'backgroundImage': `url(${slideImages[0][1]})`}}>
                            
                        </div>
                        </div>
                        <div className="each-slide">
                        <div style={{'backgroundImage': `url(${slideImages[0][2]})`}}>
                           
                        </div>
                        </div>
                    </Slide>
                    <ul>
                        <li><span>Project:</span>{this.props.titulo}</li>
                        <li><span>Role:</span>{this.props.titulo}</li>
                        <li><span>Demo</span><a href={this.props.link}>{this.props.titulo}</a></li>
                        
                    </ul>
                    <p className="description">
                    {this.props.description}
                    </p>
                </div>
            </div>
        )
    }
}
