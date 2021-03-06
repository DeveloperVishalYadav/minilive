import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import Header from "../layout/header";
import Footer from "../layout/footer";
import Counter from "../element/counter";
import TeamSlider from '../component/teamSlider';
import Testimonial from '../element/testimonial';
import Blog from '../element/blog';
import Link from 'next/link';
import Quote from '../element/quote';

function AboutUs() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Header />
            <div className="page-content bg-white" >

		{/* <div className="dlab-bnr-inr overlay-primary-dark">
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>About us 1</h1>

					<nav aria-label="breadcrumb" className="breadcrumb-row">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">About us</li>
						</ul>
					</nav>

				</div>
			</div>
		</div>  
		{/* <!-- Banner End --> */}

		{/* <!-- About Us --> */}
		<section className="content-inner-2">
			<div className="container">
			<div className="section-head style-3 text-center">
				<div className="section-head style-1"> <br/>
							<h6 className="sub-title bgl-primary m-b20 text-primary">About Us</h6>
						 
						</div>
				</div>
			<div className="section-head style-1 text-center">
            {/* <h6 className="sub-title bgl-primary m-b20 text-primary">
            About Us
            </h6> */}
            <h2 className="title">Hum hain " Dil Se Desi !"</h2>
			<p>This app has been created with a goal to have FULL TIME ENTERTAINMENT for our audience . This will boost “Self-Reliant India and Vocal for Local”. Through ‘MiniLive App’, you can Entertain and be Famous, along with Infotainment.</p>
						<p className="m-b30">Come & Hop On ! To A Fun Filled FULL Time Entertainment Journey With Our Product & Services.</p>
          </div>
				<div className="row align-items-center"> 
					<div className="col-lg-12 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="dz-media">
							<img src="images/main-slider/slider1/about-bg.png" className="" alt=""/>
						</div>
					</div>
					 
				</div>
			</div>
		</section> 

		{/* <!-- About Us --> */}
		{/* <section className="content-inner">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="section-head style-1">
							<h6 className="sub-title bgl-primary m-b20 text-primary">Watch Us</h6>
							<h2 className="title m-b15 text-primary">MiniLive - An Indian Short Video App.</h2>
							<p>Every Personnel teamed here, has a 100% motive to ENTERTAIN.</p>
						</div>
						<div className="row">
							<div className="col-lg-12 col-md-6">
								<div className="icon-bx-wraper left m-b50 icon-up">
								<div className="icon-bx-sm radius  bg-primary shadow-primary m-b20">
										<a href="javascript:void(0);" className="icon-cell text-white">
										<i class="fa fa-eye" aria-hidden="true"></i>
										</a>
									</div>
									<div className="icon-content">
										<h4 className="dlab-title m-b5">OUR VISION</h4>
										<p>Platform for everyone.</p>
									</div>
								</div>
							</div>
							<div className="col-lg-12 col-md-6">
								<div className="icon-bx-wraper left m-b50 icon-up">
									<div className="icon-bx-sm radius  bg-primary shadow-primary m-b20">
										<a href="javascript:void(0);" className="icon-cell text-white">
										<i class="fa fa-flag" aria-hidden="true"></i>
										</a>
									</div>
									<div className="icon-content">
										<h4 className="dlab-title m-b5">OUR MISSION</h4>
										<p>Easy. Fun. Reliable apps.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="video-bx style-2">
							<img src="images/about/about-yt.jpg" alt=""/>
							<div className="video-btn">
								<a href="#" className="popup-youtube" onClick={()=> setOpen(true)}><i className="flaticon-play"></i></a>

							</div>
						</div>
                        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="O4-LSC_qEDk" onClose={() => setOpen(false)} />
					</div>
				</div>
			</div>
		</section> */}


		{/* <!-- Team --> */}
		{/* <section className="content-inner">
			<div className="container">
				<div className="section-head style-1 text-center">
					<h6 className="sub-title bgl-primary m-b20 text-primary">Team</h6>
					<h2 className="title">Our Best Expertise</h2>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<TeamSlider/>
					</div>
				</div>
			</div>
		</section> */}

		{/* <!-- Testimonials --> */}
		{/* <Testimonial/> */}

		{/* <!-- Blog --> */}
		{/* <Blog/> */}

		{/* <!-- Get A Quote --> */}
		{/* <Quote/> */}

		{/* <!-- Call To Action --> */}
		{/* <section style={{"backgroundImage":"url(images/background/bg5.jpg)","backgroundSize":"cover"}}>
			<div className="container">
				<div className="row action-box style-1 align-items-center">
					<div className="col-xl-7 col-lg-8 col-md-8 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="section-head style-1">
							<h6 className="sub-title bgl-primary m-b20 text-primary">More With Us</h6>
							<h2 className="title">You Want To Showcase Your Website In Top Join With Us</h2>
						</div>
					</div>
					<div className="col-xl-5 col-lg-4 col-md-4 text-right m-b30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
						<Link  href="contact-us-1"><a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Join Now</a></Link>
					</div>
				</div>
			</div>
		</section> */}
            </div>
            <Footer />
        </>
    );
}

export default AboutUs;
