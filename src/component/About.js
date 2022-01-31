import React, { Component } from "react";

export default class About extends Component {
  render() {
    const carouselCard = {
      textAllign: "center",
      margin: "auto",
      marginTop: "50px",
    };

    return (
      <>
        <div className="bg">
          <div
            id="myCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to="0"
                className=""
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
                className=""
              ></button>
              <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
                className="active"
                aria-current="true"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item">
                <img
                  src="https://www.hdnicewallpapers.com/Walls/Big/Dog/Dog_in_Jungle_HD_Photo_Background.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="container">
                  <div className="carousel-caption text-start">
                    <h1>Example headline.</h1>
                    <p>
                      Some representative placeholder content for the first
                      slide of the carousel.
                    </p>
                    <p>
                      <a className="btn btn-lg btn-primary" href="/SignInPage">
                        Sign up today
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ee0f9217949761.562c8a11527c8.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="container">
                  <div className="carousel-caption">
                    <h1>Another example headline.</h1>
                    <p>
                      Some representative placeholder content for the second
                      slide of the carousel.
                    </p>
                    <p>
                      <a className="btn btn-lg btn-primary" href="/">
                        Learn more
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item active">
                <img
                  src="https://www.vets4pets.com/siteassets/species/dog/large-dog-on-walk-looking-over-hills.jpg?w=585&scale=down"
                  className="d-block w-100"
                  alt="..."
                />

                <div className="container">
                  <div className="carousel-caption text-end">
                    <h1>One more for good measure.</h1>
                    <p>
                      Some representative placeholder content for the third
                      slide of this carousel.
                    </p>
                    <p>
                      <a className="btn btn-lg btn-primary" href="/">
                        Browse gallery
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="container marketing">
            <div className="row" style={carouselCard}>
              <div className="col-lg-4">
                {/* <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */}
                <img
                  src="https://www.clipartkey.com/mpngs/m/83-838720_brian-griffin-poohs-adventures-wiki-fandom-powered-brian.png"
                  alt=""
                  width="140"
                  height="140"
                  style={{ borderRadius: "100px" }}
                />

                <h2>Brian Griffin</h2>
                <strong>Founder of the Therapy paw</strong>
              </div>
              <div className="col-lg-4">
                {/* <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */}
                <img
                  src="https://th.bing.com/th/id/OIP.Zs0SOyBl0lNKar04SEbaYAHaKb?pid=ImgDet&rs=1"
                  alt=""
                  width="140"
                  height="140"
                  style={{ borderRadius: "100px" }}
                />

                <h2>Courage</h2>
                <strong>The head of developer department</strong>
              </div>
              <div className="col-lg-4">
                {/* <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */}
                <img
                  src="https://th.bing.com/th/id/OIP.rWbOa0sbh9S9kXmmRO9JCwHaFW?pid=ImgDet&rs=1"
                  alt=""
                  width="140"
                  height="140"
                  style={{ borderRadius: "100px" }}
                />

                <h2>Spike</h2>
                <strong>CEO of Therapy</strong>
              </div>
            </div>

            {/* //this starts now */}

            <hr className="featurette-divider" />

            <div className="row featurette">
              <div className="col-md-7">
                <h2 className="featurette-heading">
                  First featurette heading.{" "}
                  <span className="text-muted">It’ll blow your mind.</span>
                </h2>
                <p className="lead">
                  Some great placeholder content for the first featurette here.
                  Imagine some exciting prose here.
                </p>
              </div>
              <div className="col-md-5">
                {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
                <img
                  src="https://cdn.dribbble.com/users/1186670/screenshots/7189098/media/33fb9c6279d9829266ebf7a4d0511889.gif"
                  alt=""
                  width="500"
                  height="500"
                  style={{ borderRadius: "20px" }}
                />
              </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette">
              <div className="col-md-7 order-md-2">
                <h2 className="featurette-heading">
                  Oh yeah, it’s that good.{" "}
                  <span className="text-muted">See for yourself.</span>
                </h2>
                <p className="lead">
                  Another featurette? Of course. More placeholder content here
                  to give you an idea of how this layout would work with some
                  actual real-world content in place.
                </p>
              </div>
              <div className="col-md-5 order-md-1">
                {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
                <img
                  src="https://cdn.dribbble.com/users/821493/screenshots/5985826/dog-dribbble.gif"
                  alt=""
                  width="500"
                  height="500"
                  style={{ borderRadius: "20px" }}
                />
              </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette">
              <div className="col-md-7">
                <h2 className="featurette-heading">
                  And lastly, this one.{" "}
                  <span className="text-muted">Checkmate.</span>
                </h2>
                <p className="lead">
                  And yes, this is the last block of representative placeholder
                  content. Again, not really intended to be actually read,
                  simply here to give you a better view of what this would look
                  like with some actual content. Your content.
                </p>
              </div>
              <div className="col-md-5">
                {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
                <img
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/cbd1c664827489.5adf47fc331aa.gif"
                  alt=""
                  width="500"
                  height="500"
                  style={{ borderRadius: "20px" }}
                />
              </div>
            </div>
            <hr className="featurette-divider" />
          </div>
          {/* <footer className="container">
                        <p className="float-end"><a href="/About">Back to top</a></p>
                        <p>© 2021 Company, Inc. · <a href="/">Privacy</a> · <a href="/">Terms</a></p>
                    </footer> */}
        </div>
        <footer
          _ngcontent-serverapp-c52=""
          className="container-fluid bg-dark my-0 py-3 text-light"
        >
          <p _ngcontent-serverapp-c52="" className="mb-0 text-center">
            Copyright © 2020-2021 TherapyPaw.com
          </p>
        </footer>
      </>
    );
  }
}
