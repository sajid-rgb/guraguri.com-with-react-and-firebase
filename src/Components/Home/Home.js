import React from 'react';
import { Card } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import sajek from '../../images/sajek.jpg'
import sundarban from '../../images/sundarban.jpg'
import saintMartin from '../../images/saint marin.jpg'
import darjeeling from '../../images/darjeeling.jpg'
import coxBazar from '../../images/coxBazar.jpg'
import srimangal from '../../images/srimangal.jpg'
import kuyakta from '../../images/kuaykata.jpg'
import jaflong from '../../images/jaflong.jpg'
import madhobkundo from '../../images/sundarban.jpg'
const Home = () => {
    return (
        <div className='row container '>
            <div className="col-md-4 text-center mt-3">
                <Card>
                    <Card.Img src={sundarban} style={{ height: '200px' }}></Card.Img>
                    <Card.Title><h1 className='text-center'>SundarBan</h1></Card.Title>
                    <Card.Body>
                        <Card.Text className='text-justify'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptatibus repellendus explicabo id, velit dolores quo optio voluptate autem placeat.</p>
                        </Card.Text>
                        <Link to='/checkout' className='text-center'><button className='btn btn-success'>Booking Now</button></Link>
                    </Card.Body>

                </Card>

            </div>
            <div className="col-md-4 text-center mt-3">
                <Card>
                    <Card.Img src={sajek} style={{ height: '200px' }}></Card.Img>
                    <Card.Title><h1 className='text-center'>Sajek Valley</h1></Card.Title>
                    <Card.Body>
                        <Card.Text className='text-justify'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptatibus repellendus explicabo id, velit dolores quo optio voluptate autem placeat.</p>
                        </Card.Text>
                        <Link to='/checkout' className='text-center'><button className='btn btn-success'>Booking Now</button></Link>
                    </Card.Body>
                </Card>

            </div>
            <div className="col-md-4 text-center mt-3 ">
                <Card>
                    <Card.Img src={saintMartin} style={{ height: '200px' }}></Card.Img>
                    <Card.Title><h1 className='text-center'>Saint Martin</h1></Card.Title>
                    <Card.Body>
                        <Card.Text className='text-justify'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptatibus repellendus explicabo id, velit dolores quo optio voluptate autem placeat.</p>
                        </Card.Text>
                        <Link to='/checkout' className='text-center'><button className='btn btn-success'>Booking Now</button></Link>
                    </Card.Body>
                </Card>

            </div>
            <div className="col-md-4 text-center mt-3">
                <Card>
                    <Card.Img src={coxBazar} style={{ height: '200px' }}></Card.Img>
                    <Card.Title><h1 className='text-center'>Cox's Bazar</h1></Card.Title>
                    <Card.Body>
                        <Card.Text className='text-justify'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptatibus repellendus explicabo id, velit dolores quo optio voluptate autem placeat.</p>
                        </Card.Text>
                        <Link to='/checkout' className='text-center'><button className='btn btn-success'>Booking Now</button></Link>
                    </Card.Body>
                </Card>

            </div>
            <div className="col-md-4 text-center mt-3">
                <Card>
                    <Card.Img src={darjeeling} style={{ height: '200px' }}></Card.Img>
                    <Card.Title><h1 className='text-center'>Darjeeling</h1></Card.Title>
                    <Card.Body>
                        <Card.Text className='text-justify'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptatibus repellendus explicabo id, velit dolores quo optio voluptate autem placeat.</p>
                        </Card.Text>
                        <Link to='/checkout' className='text-center'><button className='btn btn-success'>Booking Now</button></Link>
                    </Card.Body>
                </Card>

            </div>
            <div className="col-md-4 text-center mt-3">
                <Card>
                    <Card.Img src={srimangal} style={{ height: '200px' }}></Card.Img>
                    <Card.Title><h1 className='text-center'>Srimangal</h1></Card.Title>
                    <Card.Body>
                        <Card.Text className='text-justify'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptatibus repellendus explicabo id, velit dolores quo optio voluptate autem placeat.</p>
                        </Card.Text>
                        <Link to='/checkout' className='text-center'><button className='btn btn-success'>Booking Now</button></Link>
                    </Card.Body>
                </Card>

            </div>
            <div className="col-md-4 text-center mt-3">
                <Card>
                    <Card.Img src={kuyakta} style={{ height: '200px' }}></Card.Img>
                    <Card.Title><h1 className='text-center'>Kuyakata</h1></Card.Title>
                    <Card.Body>
                        <Card.Text className='text-justify'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptatibus repellendus explicabo id, velit dolores quo optio voluptate autem placeat.</p>
                        </Card.Text>
                        <Link to='/checkout' className='text-center'><button className='btn btn-success'>Booking Now</button></Link>
                    </Card.Body>
                </Card>

            </div>
            <div className="col-md-4 text-center mt-3">
                <Card>
                    <Card.Img src={jaflong} style={{ height: '200px' }}></Card.Img>
                    <Card.Title><h1 className='text-center'>Jaflong</h1></Card.Title>
                    <Card.Body>
                        <Card.Text className='text-justify'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptatibus repellendus explicabo id, velit dolores quo optio voluptate autem placeat.</p>
                        </Card.Text>
                        <Link to='/checkout' className='text-center'><button className='btn btn-success'>Booking Now</button></Link>
                    </Card.Body>
                </Card>

            </div>
            <div className="col-md-4 text-center mt-3">
                <Card>
                    <Card.Img src={madhobkundo} style={{ height: '200px' }}></Card.Img>
                    <Card.Title><h1 className='text-center'>Madhub Kunda</h1></Card.Title>
                    <Card.Body>
                        <Card.Text className='text-justify'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptatibus repellendus explicabo id, velit dolores quo optio voluptate autem placeat.</p>
                        </Card.Text>
                        <Link to='/checkout' className='text-center'><button className='btn btn-success'>Booking Now</button></Link>
                    </Card.Body>
                </Card>

            </div>
        </div>
    );
};

export default Home;