import React, {Component} from 'react'
export default class player extends Component{
    render(){
        return(
            <div className='container'>
                <div className='column'>
                    <div className='card'>
                        <img src='assets/images/cr.jpg'></img>
                        <h3>Cristiano Ronaldo</h3>
                        <p className='title'>Manchester United</p>
                        <p><button className='btn'>Detail</button></p>
                    </div>
                </div>

                <div className='column'>
                    <div className='card'>
                        <img src='assets/images/kante.jpg'></img>
                        <h3>Kante</h3>
                        <p className='title'>Chelsea</p>
                        <p><button className='btn'>Detail</button></p>
                    </div>
                </div>
                
                <div className='column'>
                    <div className='card'>
                        <img src='assets/images/messi.jpg'></img>
                        <h3>Messsi</h3>
                        <p className='title'>PSG</p>
                        <p><button className='btn'>Detail</button></p>
                    </div>
                </div>

                <div className='column'>
                    <div className='card'>
                        <img src='assets/images/neymar.jpg'></img>
                        <h3>Neymar</h3>
                        <p className='title'>PSG</p>
                        <p><button className='btn'>Detail</button></p>
                    </div>
                </div>

                <div className='column'>
                    <div className='card'>
                        <img src='assets/images/kane.jpg'></img>
                        <h3>Harry Kane</h3>
                        <p className='title'>Totenham</p>
                        <p><button className='btn'>Detail</button></p>
                    </div>
                </div>

                <div className='column'>
                    <div className='card'>
                        <img src='assets/images/haaland.jpg'></img>
                        <h3>Haaland</h3>
                        <p className='title'>Manchester City</p>
                        <p><button className='btn'>Detail</button></p>
                    </div>
                </div>                
            </div>
        )
    }
}