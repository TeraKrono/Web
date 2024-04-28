import React from "react";
import homeimg1 from './image/home-img-1.jpg';
import homeimg2 from './image/home-img-3.jpeg';
import homeimg3 from './image/home-img-4.jpeg';
import homeimg4 from './image/home-img-5.jpeg';
import homeimg5 from './image/home-img-6.jpg';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



class Home extends React.Component {

    render () {
        return (
            <div className="home" id="home">
                <div className="swiper-container">
                <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                    <div className="swiper-wrapper">
                    <div className="swiper-slide">
                    <SwiperSlide>
                    <div className="box " style={{ background: `url(${homeimg1}) no-repeat`}}>
                                <div className="content">
                                    <h3>Tokyo Revengers</h3>
                                    <p>Takemichi Hanagaki is pushed onto the tracks as he attempts<br></br>
                                    to board a train. When he wakes up, he realizes that somehow<br></br>
                                    he had gone back in time 12 years and is a middle school student.</p>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="box " style={{ background: `url(${homeimg2}) no-repeat`}}>
                                <div className="content">
                                    <h3>Higurashi: When They Cry - GOU</h3>
                                    <p>Moving to the quiet village of Hinamizawa, Keiichi easily<br></br>
                                    finds friendship amongst his new classmates. Ready for the<br></br>
                                    largest festival of the year, he’s unable to dismiss a looming<br></br>
                                    sense of dread. What dark secrets lie buried in his new home?</p>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="box " style={{ background: `url(${homeimg3}) no-repeat`}}>
                                <div className="content">
                                    <h3>Neon Genesis Evangelion</h3>
                                    <p>Fifteen years after the Second Impact, Shinji Ikari joins his<br></br>
                                    father's group NERV as one of several teenage mecha pilots<br></br>
                                    fighting the monstrous Angels.</p>
                                </div>
                            </div>
                            </SwiperSlide>
                    <SwiperSlide>
                    <div className="box " style={{ background: `url(${homeimg4}) no-repeat`}}>
                                <div className="content">
                                    <h3>Mushoku Tensei: Jobless Reincarnation</h3>
                                    <p>When a 34-year-old underachiever gets run over by a bus,<br></br>
                                    his story doesn’t end there. Reincarnated as an infant,<br></br>
                                    Rudy will use newfound courage, friends, and magical<br></br>
                                    abilities to embark on an epic adventure!</p>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="box " style={{ background: `url(${homeimg5}) no-repeat`}}>
                                <div className="content">
                                    <h3>The Rising of the Shield Hero</h3>
                                    <p>A man equipped with only a shield is chosen to be one<br></br>
                                    of the world's great defenders, but when a cruel betrayal<br></br>
                                    shatters his reputation, he tries to regain the public's trust<br></br>
                                    while fighting evil alongside a few devoted allies.</p>
                                </div>
                            </div>
                    </SwiperSlide>
                    </div>
                    </div>
                </Swiper>
                    {/* <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="box " style={{ background: `url(${homeimg1}) no-repeat`}}>
                                <div className="content">
                                    <h3>Tokyo Revengers</h3>
                                    <p>Takemichi Hanagaki is pushed onto the tracks as he attempts<br></br>
                                    to board a train. When he wakes up, he realizes that somehow<br></br>
                                    he had gone back in time 12 years and is a middle school student.</p>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="box " style={{ background: `url(${homeimg2}) no-repeat`}}>
                                <div className="content">
                                    <h3>Higurashi: When They Cry - GOU</h3>
                                    <p>Moving to the quiet village of Hinamizawa, Keiichi easily<br></br>
                                    finds friendship amongst his new classmates. Ready for the<br></br>
                                    largest festival of the year, he’s unable to dismiss a looming<br></br>
                                    sense of dread. What dark secrets lie buried in his new home?</p>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="box " style={{ background: `url(${homeimg3}) no-repeat`}}>
                                <div className="content">
                                    <h3>Neon Genesis Evangelion</h3>
                                    <p>Fifteen years after the Second Impact, Shinji Ikari joins his<br></br>
                                    father's group NERV as one of several teenage mecha pilots<br></br>
                                    fighting the monstrous Angels.</p>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="box " style={{ background: `url(${homeimg4}) no-repeat`}}>
                                <div className="content">
                                    <h3>Mushoku Tensei: Jobless Reincarnation</h3>
                                    <p>When a 34-year-old underachiever gets run over by a bus,<br></br>
                                    his story doesn’t end there. Reincarnated as an infant,<br></br>
                                    Rudy will use newfound courage, friends, and magical<br></br>
                                    abilities to embark on an epic adventure!</p>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="box " style={{ background: `url(${homeimg5}) no-repeat`}}>
                                <div className="content">
                                    <h3>The Rising of the Shield Hero</h3>
                                    <p>A man equipped with only a shield is chosen to be one<br></br>
                                    of the world's great defenders, but when a cruel betrayal<br></br>
                                    shatters his reputation, he tries to regain the public's trust<br></br>
                                    while fighting evil alongside a few devoted allies.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                    
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                    
                    <div className="swiper-scrollbar"></div> */}
                </div>
            </div>
        )
    }
}

export default Home;