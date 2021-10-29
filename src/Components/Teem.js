import React from "react";

const Teem = () => {
  return (
    <div className="teem-wrapper">
      <div className="main-heading">Meet the team</div>
      <hr />
      <div className="text-para">
        <p>
          Map where your photos were taken and discover local points of
          interest. Map where your photos.
        </p>
      </div>

      {/* TEEM BOXES */}
      {/* TEEM BOXES */}
      <div className="box-wrapper">
        {/* first row of boxes */}
        <div className="box-1 image-box"></div>
        <div className="text-box">
          <div className="title">zeshaan A.</div>
          <div className="sub-title">project manager</div>
          <div className="about-section">
            <p>
              A passionate behind a realistic dream can turn the impossible into
              possible. That is what Zeeshan Arshad is, a qualified software
              engineer with a bright idea to serve the business digitally.
            </p>
          </div>
        </div>
        <div className="parent-box">
          <div className="box-3 image-box img-width"> </div>
          <div className="text-box text-box-width">
            <div className="title">Nadeem y.</div>
            <div className="sub-title">Lead Software Architect</div>
            <div className="about-section ">
              <p>
                Inspiration always finds its ways through intuition. Nadeem is a
                software engineer with the instincts to create robust designs
                that can maximize the production and revenue for every type of
                business.
              </p>
            </div>
          </div>
        </div>

        {/* first row of boxes End*/}
        {/* second row of boxes start*/}
        <div className="parent-box">
          <div className="text-box text-box-width order-text">
            <div className="title">Waqas A.</div>
            <div className="sub-title">Director of Business Development</div>
            <div className="about-section">
              <p>
                You do not have to be just an entrepreneur to develop a
                business. Instead, you need a scalable and robust mind to
                discover the ideas to make a business strong and to grow it.
                That is what Was A. is, the Director of Business Development.
              </p>
            </div>
          </div>
          <div className="box-6 image-box img-width order-img"></div>
        </div>
        <div className="text-box order-text-two ">
          <div className="title">SIKANDAR K.</div>
          <div className="sub-title">IT Systems Administrative</div>
          <div className="about-section">
            <p>
              Understandability comes first in every project. When a team has a
              software engineer like Sikandar Khan, none of the concepts remains
              in ambiguity. That is why MDSol can please its every client.
            </p>
          </div>
        </div>

        <div className="box-8 image-box order-img-two"></div>

        {/* second row of boxes End*/}
        {/* Third row of boxes start*/}
        <div className="box-9 image-box"></div>
        <div className="text-box">
          <div className="title">Shehzad S.</div>
          <div className="sub-title">UI/UX Director</div>
          <div className="about-section">
            <p>
              The eye-catching designs and attractive looks on websites and
              mobile apps engage the audience. Shehzad Sarwar makes that
              possible with his UI/UX expertise and vast knowledge in this line.
            </p>
          </div>
        </div>
        <div className="parent-box">
          <div className="box-11 image-box img-width"></div>
          <div className="text-box text-box-width">
            <div className="title">Raweewan C.</div>
            <div className="sub-title">Project Manager</div>
            <div className="about-section">
              <p>
                The golden principle of sales is to understand like a customer.
                When a person can know what his customer will want and what will
                satisfy his needs, he is capable of being an IT Sales Executive.
                Raweewan C. is among those who can empathize with the customers
                and help them with the best solutions.
              </p>
            </div>
          </div>
        </div>
        {/* Third row of boxes End*/}
      </div>
    </div>
  );
};

export default Teem;
