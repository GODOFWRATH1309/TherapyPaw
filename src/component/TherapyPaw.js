import React from "react";

const TherapyPaw = () => {
  // const startingDiv={
  //     textAllign:"center",
  //     background: "aqua",
  //     height: "450px"

  // }
  // const carouselCard = {
  //     textAllign: "center",
  //     paddingRight: "75px",
  //     paddingLeft: "75px",
  //     width: "37%"

  // }
  // const textcode = {
  //     textAllign:"center!Important",

  //     backgroundSize: "cover",
  // paddingBottom: "100px",
  // paddingLeft: "100px",
  // paddingRight:"100px",
  // paddingTop: "100px",
  // backgroundImage: "url('https://wallpaperaccess.com/full/769165.jpg')"
  // }
  return (
    <>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="http://animalangels.org.in/wp-content/uploads/2014/02/animal-assisted-education.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="http://animalangels.org.in/wp-content/uploads/2014/02/spreading-smiles.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="http://animalangels.org.in/wp-content/uploads/2014/02/human-animal-bond.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
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
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section className="py-8 py-md-11 " style={{ padding: "50px" }}>
        <div className="container">
          <div className="row">
            <div
              className="col-12 col-md-4 aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="icon text-primary mb-3">
                <img
                  src="https://image.flaticon.com/icons/png/512/185/185465.png"
                  alt=""
                  height="70"
                  width="70"
                />
              </div>

              <h3>Built to bring happiness</h3>

              <p className="text-muted mb-6 mb-md-0">
               
              </p>
            </div>
            <div
              className="col-12 col-md-4 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <div className="icon text-primary mb-3">
                <img
                  src="https://th.bing.com/th/id/R.ff1d2298a9da8b5441d0bef7f371ff62?rik=HHAsMSB3wDLNxQ&riu=http%3a%2f%2fimage.flaticon.com%2ficons%2fpng%2f512%2f91%2f91502.png&ehk=r3gtnDpBI78nhm0JxQIeRO15OmqZFv9%2fV%2b1e%2f%2fkH6gA%3d&risl=&pid=ImgRaw&r=0"
                  alt=""
                  height="70"
                  width="70"
                />
              </div>

              <h3>Trained to give comfort</h3>

              <p className="text-muted mb-6 mb-md-0">
               
              </p>
            </div>
            <div
              className="col-12 col-md-4 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="icon text-primary mb-3">
                <img
                  src="https://image.flaticon.com/icons/png/512/1372/1372530.png"
                  alt=""
                  height="70"
                  width="70"
                />
              </div>

              <h3>Book with prior appointment</h3>

              <p className="text-muted mb-0">
                
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              First featurette heading.{" "}
              <span className="text-muted">It’ll blow your mind.</span>
            </h2>
            <p className="lead">
            Most of us probably don’t believe we need a formal definition of happiness; we know it when we feel it, and we often use the term to describe a range of positive emotions, including joy, pride, contentment, and gratitude. To understand, to give comfort and a friendly vibe for the people who suffers from loneliness
            </p>
          </div>
          <div className="col-md-5">
            {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
            <img
              src="https://i.pinimg.com/originals/08/80/04/088004074cb65e7c4b43d774b8b8c628.gif"
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
            Our dogs are certifed and well trained to provide affection,
                comfort and support to people. In contrast to assistance dogs,
                which are trained to assist specific patients with their
                day-to-day physical needs, therapy dogs are trained to interact
                with all kinds of people, not just their handlers.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
            <img
              src="https://i.pinimg.com/originals/b6/74/ab/b674abf62b5fcff8300abc312c50dc56.gif"
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
              Therapy dogs are trained to help people with their day-to-day
              physical needs, therefore each dog is trained differently for
              specific need of the patient. Hence, patient needs to take a prior
              appointment and consultation with our inhouse doctor and
              accordingly we book a slot of our therapy dog.
            </p>
          </div>
          <div className="col-md-5">
            {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
            <img
              src="https://cdn-images-1.medium.com/max/1200/1*HxkUHlGhykkuLGA24veOlA.gif"
              alt=""
              width="500"
              height="500"
              style={{ borderRadius: "20px" }}
            />
          </div>
        </div>

        <hr className="featurette-divider" />
      </div>
      {/* <footer className="container bg-dark text-white">
                        <p className="float-end"><a href="/About">Back to top</a></p>
                        <p>© 2021 Company, Inc. · <a href="/">Privacy</a> · <a href="/">Terms</a></p>
                    </footer> */}

      <div className="row" style={{ paddingBottom: "15px", paddingTop: "5px" }}>
        <div
          className="col-15 col-md-3 text-center"
          style={{ allignItem: "center", paddingLeft: "50px" }}
        >
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img
              src="https://clipart.info/images/ccovers/1509135366facebook-symbol-png-logo.png"
              height="50"
              width="50"
              alt=""
            />
          </a>
        </div>
        <div
          className="col-15 col-md-3 text-center"
          style={{ allignItem: "center", paddingLeft: "50px" }}
        >
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img
              src="https://th.bing.com/th/id/R.14fbf1be3bb79444c0245a51a0f89ab2?rik=UkXeB5L2aE8Biw&riu=http%3a%2f%2fpngimg.com%2fuploads%2finstagram%2finstagram_PNG9.png&ehk=GnhAoqBr5eV3LRtLGDB2XElOW7mvkdk29%2byVkqj09y8%3d&risl=&pid=ImgRaw&r=0"
              height="50"
              width="50"
              alt=""
            />
          </a>
        </div>
        <div
          className="col-12 col-md-3 text-center"
          style={{ allignItem: "center", paddingLeft: "50px" }}
        >
          <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
            <img
              src="https://1000marcas.net/wp-content/uploads/2019/11/Twitter-logo.png"
              height="50"
              width="50"
              alt=""
            />
          </a>
        </div>
        <div
          className="col-12 col-md-3 text-center"
          style={{ allignItem: "center", paddingLeft: "50px" }}
        >
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <img
              src="https://www.freepnglogos.com/uploads/linkedin-in-logo-png-1.png"
              height="50"
              width="50"
              alt=""
            />
          </a>
        </div>
        {/* <div className="col-15 col-md-2 text-center" style={{ allignItem: "center", paddingLeft: "50px" }}>
                        <a href='https://www.gmail.com/'><img src="https://www.freepnglogos.com/uploads/gmail-email-logo-png-16.png" height="50" width="50" alt="" /></a>
                    </div>
                    <div className="col-15 col-md-2 text-center" style={{ allignItem: "center", paddingLeft: "50px" }}>
                        <a href='https://www.quora.com/'><img src="https://th.bing.com/th/id/R.65dcdf7ec2b7b84839c61c9c0f56dbf6?rik=%2f8P%2bvtA7jxdEzA&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2flimav%2fflat-gradient-social%2f512%2fQuora-icon.png&ehk=fP3EqyawVnn4gSPPita4H5LYy4pQvrgjHvw69wePASo%3d&risl=&pid=ImgRaw&r=0" height="50" width="50" alt="" /></a>
                    </div> */}
      </div>

      <footer className="container-fluid bg-dark my-0 py-3 text-light">
        <p className="mb-0 text-center">Copyright © 2020-2021 TherapyPaw.com</p>
      </footer>
    </>
  );
};

export default TherapyPaw;
