import React from "react";

const About = () => {
  return (
    <>
      <h2 className="mt-5 fw-bold">ABOUT US</h2>
      <hr></hr>
      <div className="Container d-flex flex-column-reverse flex-md-row mt-5 mb-5">
        <div
          className="w-100 w-md-50 ms-5 me-5"
          style={{ display: "flex", justifyContent: "start" }}
        >
          <p>
            A good pair of shoes can take you to the best places. Heel & Buckle
            is the best place to find that good pair of shoe which best defines
            you. We have a wide and vibrant assortment of all types of shoes
            required to fill up your wardrobe and meet all your needs – that’s
            why we have successfully emerged as the premium footwear brand for
            men and women in India.
            <br />
            <br />
            If you don’t want to settle for anything less than elite, you’re at
            the right place. Our versatile ranges of shoes are meticulously
            crafted to provide you with comfort, convenience and style – and all
            this at a price that justifies the value of our products.
            <br />
            <br />
            We believe that shoes maketh a person and our intricately designed
            quality shoes are a testament to that belief. Be it a formal occasion
            or a festive event, you are sure to find your favourite footwear
            that’ll accompany you along your journey to attain the best look.
            <br />
            <br />
            We would love to be your go-to leather shoes and sneaker shoe brand
            for men & women that delivers premium quality and exceeds your
            expectations.
            <br />
            <br />
            Without even stepping out, you can access the latest trends of all
            kinds of shoes, sneakers, boots and sandals all in one place.
            <br />
            <br />
            If the shoe fits, great! If it doesn’t, we probably have another
            pair for you!
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <img
            className="respo mt-5 ms-5 me-3"
            src="https://cdn.shopify.com/s/files/1/0077/0673/8785/files/About_us_750_x_750_3.jpg?v=1656486231&width=750"
            alt="photo"
          />
        </div>
      </div>
    </>
  );
};

export default About;
