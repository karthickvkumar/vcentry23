import React, {useState} from 'react';

import "../css/flaticon.css";
import "../css/style.css";

const TravelixHome = () => {

  const [searchHotels, DisplaysearchHotels] = useState(true);

  const showHotels = () => {
    DisplaysearchHotels(true);
  }
  
  const showDestination = () => {
    DisplaysearchHotels(false);
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
      <div className="container">
        <a className="navbar-brand" href="index.html">Travelix<span>Travel Agency</span></a>
        <button className="navbar-toggler" type="button">
          <span className="oi oi-menu"></span> Menu
        </button>
        { true &&  
          <div className="navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
            <li className="nav-item"><a href="destination.html" className="nav-link">Destination</a></li>
            <li className="nav-item"><a href="hotel.html" className="nav-link">Hotel</a></li>
            <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
          </ul>
          </div>
        }
        
      </div>
    </nav>

    <div class="hero-wrap js-fullheight header-banner" style={{"backgroundImage" : `url(${require("../images/bg_5.jpg")})`}}>
      <div class="overlay header-banner"></div>
      <div class="container">
        <div class="row no-gutters slider-text js-fullheight align-items-center">
          <div class="col-md-7">
            <span class="subheading">Welcome to Travelix</span>
            <h1 class="mb-4">Discover Your Favorite Place with Us</h1>
            <p class="caps">Travel to the any corner of the world, without going around in circles</p>
          </div>

        </div>
      </div>
    </div>
    

    <section class="ftco-section ftco-no-pb ftco-no-pt">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="ftco-search d-flex justify-content-center">
						<div class="row">
							<div class="col-md-12 nav-link-wrap">
								<div class="nav nav-pills text-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
									
									<a class={searchHotels ? "nav-link active mr-md-1" : "nav-link"} onClick={() => showHotels()}>Hotel</a>
									
									<a class={searchHotels ? "nav-link" : "nav-link active mr-md-1 m-left-10"} onClick={() => showDestination()}>Search Tour</a>

								</div>
							</div>
							<div class="col-md-12 tab-wrap">

								<div class="tab-content" id="v-pills-tabContent">
                { searchHotels ? 
                      	<div class="tab-pane show active" id="v-pills-1" role="tabpanel"
                        aria-labelledby="v-pills-nextgen-tab">
                        <form action="#" class="search-property-1">
                          <div class="row no-gutters">
                            <div class="col-md d-flex">
                              <div class="form-group p-4 border-0">
                                <label for="#">Destination</label>
                                <div class="form-field">
                                  <div class="icon"><span class="fa fa-search"></span></div>
                                  <input type="text" class="form-control" placeholder="Search place" />
                                </div>
                              </div>
                            </div>
                            <div class="col-md d-flex">
                              <div class="form-group p-4">
                                <label for="#">Check-in date</label>
                                <div class="form-field">
                                  <div class="icon"><span class="fa fa-calendar"></span></div>
                                  <input type="date" class="form-control checkin_date" placeholder="Check In Date"/>
                                </div>
                              </div>
                            </div>
                            <div class="col-md d-flex">
                              <div class="form-group p-4">
                                <label for="#">Check-out date</label>
                                <div class="form-field">
                                  <div class="icon"><span class="fa fa-calendar"></span></div>
                                  <input type="date" class="form-control checkout_date" placeholder="Check Out Date"/>
                                </div>
                              </div>
                            </div>
                            <div class="col-md d-flex">
                              <div class="form-group p-4">
                                <label for="#">Price Limit</label>
                                <div class="form-field">
                                  <div class="select-wrap">
                                    <div class="icon"><span class="fa fa-chevron-down"></span></div>
                                    <select name="" id="" class="form-control">
                                      <option value="">$100</option>
                                      <option value="">$10,000</option>
                                      <option value="">$50,000</option>
                                      <option value="">$100,000</option>
                                      <option value="">$200,000</option>
                                      <option value="">$300,000</option>
                                      <option value="">$400,000</option>
                                      <option value="">$500,000</option>
                                      <option value="">$600,000</option>
                                      <option value="">$700,000</option>
                                      <option value="">$800,000</option>
                                      <option value="">$900,000</option>
                                      <option value="">$1,000,000</option>
                                      <option value="">$2,000,000</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-md d-flex">
                              <div class="form-group d-flex w-100 border-0">
                                <div class="form-field w-100 align-items-center d-flex">
                                  <input type="submit" value="Search"
                                    class="align-self-stretch form-control btn btn-primary"/>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      :  
                      <div class="tab-pane show active" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-performance-tab">
										<form action="#" class="search-property-1">
											<div class="row no-gutters">
												<div class="col-lg d-flex">
													<div class="form-group p-4">
														<label for="#">Destination</label>
														<div class="form-field">
															<div class="icon"><span class="fa fa-search"></span></div>
															<input type="text" class="form-control" placeholder="Search place"/>
														</div>
													</div>
												</div>
												<div class="col-lg d-flex">
													<div class="form-group p-4 border-0">
														<label for="#">Location/Area</label>
														<div class="form-field">
															<div class="icon"><span class="fa fa-location-arrow"></span></div>
															<input type="text" class="form-control" placeholder="Search place"/>
														</div>
													</div>
												</div>
												<div class="col-lg d-flex">
													<div class="form-group d-flex w-100 border-0">
														<div class="form-field w-100 align-items-center d-flex">
															<input type="submit" value="Search"
																class="align-self-stretch form-control btn btn-primary p-0"/>
														</div>
													</div>
												</div>
											</div>
										</form>
									</div>
                  }

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>
	</section>


  <section class="ftco-section services-section">
		<div class="container">
			<div class="row d-flex">
				<div class="col-md-6 order-md-last heading-section pl-md-5 d-flex align-items-center">
					<div class="w-100">
						<span class="subheading">Welcome to Travelix</span>
						<h2 class="mb-4">It's time to start your adventure</h2>
						<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a
							paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
						<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
							blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
							ocean.
							A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
						<p><a href="#" class="btn btn-primary py-3 px-4">Search Destination</a></p>
					</div>
				</div>
				<div class="col-md-6">
					<div class="row">
						<div class="col-md-12 col-lg-6 d-flex align-self-stretch">
							<div class="services services-1 color-1 d-block img"
								style={{"backgroundImage" : `url(${require("../images/services-1.jpg")})`}}>
								<div class="icon d-flex align-items-center justify-content-center"><span
										class="flaticon-paragliding"></span></div>
								<div class="media-body">
									<h3 class="heading mb-3">Activities</h3>
									<p>A small river named Duden flows by their place and supplies it with the necessary</p>
								</div>
							</div>
						</div>
						<div class="col-md-12 col-lg-6 d-flex align-self-stretch">
							<div class="services services-1 color-2 d-block img"
								style={{"backgroundImage" : `url(${require("../images/services-1.jpg")})`}}>
								<div class="icon d-flex align-items-center justify-content-center"><span class="flaticon-route"></span>
								</div>
								<div class="media-body">
									<h3 class="heading mb-3">Travel Arrangements</h3>
									<p>A small river named Duden flows by their place and supplies it with the necessary</p>
								</div>
							</div>
						</div>
						<div class="col-md-12 col-lg-6 d-flex align-self-stretch">
							<div class="services services-1 color-3 d-block img"
								style={{"backgroundImage" : `url(${require("../images/services-1.jpg")})`}}>
								<div class="icon d-flex align-items-center justify-content-center"><span
										class="flaticon-tour-guide"></span></div>
								<div class="media-body">
									<h3 class="heading mb-3">Private Guide</h3>
									<p>A small river named Duden flows by their place and supplies it with the necessary</p>
								</div>
							</div>
						</div>
						<div class="col-md-12 col-lg-6 d-flex align-self-stretch">
							<div class="services services-1 color-4 d-block img"
								style={{"backgroundImage" : `url(${require("../images/services-1.jpg")})`}}>
								<div class="icon d-flex align-items-center justify-content-center"><span class="flaticon-map"></span>
								</div>
								<div class="media-body">
									<h3 class="heading mb-3">Location Manager</h3>
									<p>A small river named Duden flows by their place and supplies it with the necessary</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

  <section class="ftco-sections">
		<div class="container">
			<div class="row justify-content-center pb-4">
				<div class="col-md-12 heading-section text-center">
					<span class="subheading">Destination</span>
					<h2 class="mb-4">Tour Destination</h2>
				</div>
			</div>
			<div class="row">
				<div class="col-md-4 m-btm-40">
          <div class="item">
            <div class="project-destination">
              <a href="#" class="img" style={{"backgroundImage" : `url(${require("../images/place-1.jpg")})`}}>
                <div class="text">
                  <h3>Philippines</h3>
                  <span>8 Tours</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="col-md-4 m-btm-40">
          <div class="item">
            <div class="project-destination">
              <a href="#" class="img" style={{"backgroundImage" : `url(${require("../images/place-2.jpg")})`}}>
                <div class="text">
                  <h3>Canada</h3>
                  <span>2 Tours</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="col-md-4 m-btm-40">
          <div class="item">
            <div class="project-destination">
              <a href="#" class="img" style={{"backgroundImage" : `url(${require("../images/place-3.jpg")})`}}>
                <div class="text">
                  <h3>Thailand</h3>
                  <span>5 Tours</span>
                </div>
              </a>
            </div>
          </div>
        </div>
				
			</div>
		</div>
	</section>


  <section class="ftco-sections">
		<div class="container">
			<div class="row justify-content-center pb-4">
				<div class="col-md-12 heading-section text-center">
					<span class="subheading">Our Blog</span>
					<h2 class="mb-4">Recent Post</h2>
				</div>
			</div>
			<div class="row d-flex">
				<div class="col-md-4 d-flex">
					<div class="blog-entry justify-content-end">
						<a href="blog-single.html" class="block-20" style={{"backgroundImage" : `url(${require("../images/image_1.jpg")})`}}>
						</a>
						<div class="text">
							<div class="d-flex align-items-center mb-4 topp">
								<div class="one">
									<span class="day">11</span>
								</div>
								<div class="two">
									<span class="yr">2020</span>
									<span class="mos">September</span>
								</div>
							</div>
							<h3 class="heading"><a href="#">Most Popular Place In This World</a></h3>
							
							<p><a href="#" class="btn btn-primary">Read more</a></p>
						</div>
					</div>
				</div>
				<div class="col-md-4 d-flex">
					<div class="blog-entry justify-content-end">
						<a href="blog-single.html" class="block-20" style={{"backgroundImage" : `url(${require("../images/image_2.jpg")})`}}>
						</a>
						<div class="text">
							<div class="d-flex align-items-center mb-4 topp">
								<div class="one">
									<span class="day">11</span>
								</div>
								<div class="two">
									<span class="yr">2020</span>
									<span class="mos">September</span>
								</div>
							</div>
							<h3 class="heading"><a href="#">Most Popular Place In This World</a></h3>
							<p><a href="#" class="btn btn-primary">Read more</a></p>
						</div>
					</div>
				</div>
				<div class="col-md-4 d-flex">
					<div class="blog-entry">
						<a href="blog-single.html" class="block-20" style={{"backgroundImage" : `url(${require("../images/image_3.jpg")})`}}>
						</a>
						<div class="text">
							<div class="d-flex align-items-center mb-4 topp">
								<div class="one">
									<span class="day">11</span>
								</div>
								<div class="two">
									<span class="yr">2020</span>
									<span class="mos">September</span>
								</div>
							</div>
							<h3 class="heading"><a href="#">Most Popular Place In This World</a></h3>
							<p><a href="#" class="btn btn-primary">Read more</a></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="ftco-intro ftco-section ftco-no-pt">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-12 text-center">
					<div class="img" style={{"backgroundImage" : `url(${require("../images/bg_2.jpg")})`}}>
						<div class="overlay"></div>
						<h2>We Are Travelix A Travel Agency</h2>
						<p>We can manage your dream building A small river named Duden flows by their place</p>
						<p class="mb-0"><a href="#" class="btn btn-primary px-4 py-3">Ask For A Quote</a></p>
					</div>
				</div>
			</div>
		</div>
	</section>

  <footer class="ftco-footer bg-bottom ftco-no-pt" style={{"backgroundImage" : `url(${require("../images/bg_3.jpg")})`}}>
		<div class="container">
			<div class="row mb-5">
				<div class="col-md pt-5">
					<div class="ftco-footer-widget pt-md-5 mb-4">
						<h2 class="ftco-heading-2">About</h2>
						<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
							blind texts.</p>
						<ul class="ftco-footer-social list-unstyled float-md-left float-lft">
							<li class=""><a href=" #"><span class="fa fa-twitter"></span></a></li>
							<li class=""><a href=" #"><span class="fa fa-facebook"></span></a></li>
							<li class=""><a href=" #"><span class="fa fa-instagram"></span></a></li>
						</ul>
					</div>
				</div>
				<div class="col-md pt-5 border-left">
					<div class="ftco-footer-widget pt-md-5 mb-4 ml-md-5">
						<h2 class="ftco-heading-2">Infromation</h2>
						<ul class="list-unstyled">
							<li><a href="#" class="py-2 d-block">Online Enquiry</a></li>
							<li><a href="#" class="py-2 d-block">General Enquiries</a></li>
							<li><a href="#" class="py-2 d-block">Booking Conditions</a></li>
							<li><a href="#" class="py-2 d-block">Privacy and Policy</a></li>
							<li><a href="#" class="py-2 d-block">Refund Policy</a></li>
							<li><a href="#" class="py-2 d-block">Call Us</a></li>
						</ul>
					</div>
				</div>
				<div class="col-md pt-5 border-left">
					<div class="ftco-footer-widget pt-md-5 mb-4">
						<h2 class="ftco-heading-2">Experience</h2>
						<ul class="list-unstyled">
							<li><a href="#" class="py-2 d-block">Adventure</a></li>
							<li><a href="#" class="py-2 d-block">Hotel and Restaurant</a></li>
							<li><a href="#" class="py-2 d-block">Beach</a></li>
							<li><a href="#" class="py-2 d-block">Nature</a></li>
							<li><a href="#" class="py-2 d-block">Camping</a></li>
							<li><a href="#" class="py-2 d-block">Party</a></li>
						</ul>
					</div>
				</div>
				<div class="col-md pt-5 border-left">
					<div class="ftco-footer-widget pt-md-5 mb-4">
						<h2 class="ftco-heading-2">Have a Questions?</h2>
						<div class="block-23 mb-3">
							<ul>
								<li><span class="icon fa fa-map-marker"></span><span class="text">203 Fake St. Mountain View, San
										Francisco, California, USA</span></li>
								<li><a href="#"><span class="icon fa fa-phone"></span><span class="text">+2 392 3929 210</span></a></li>
								<li><a href="#"><span class="icon fa fa-paper-plane"></span><span
											class="text">info@yourdomain.com</span></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>

		</div>
	</footer>

    </div>
  );
};

export default TravelixHome;