import "./testimonials.css";
import imgJohn from "../../assets/image-john.jpg";
import imgTanya from "../../assets/image-tanya.jpg";
import bgQuote from "../../assets/pattern-quotes.svg";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const contentArray = [
    {
      image: imgTanya,
      paragraph:
        "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so  excited about the future. ” ",
      name: "Tanya Sinclair",
      occupation: "UX Engineer",
    },
    {
      image: imgJohn,
      paragraph:
        "  “ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
      name: "John Tarkpor",
      occupation: "Junior Front-end Developer",
    },
  ];

  const [id, setId] = useState(0);

  const nextId = () => {
    setId((id) => {
      if (id < contentArray.length - 1) {
        id += 1;
      } else {
        id = 0;
      }
      return id;
    });
  };

  const prevId = () => {
    setId((id) => {
      if (id !== 0) {
        id -= 1;
      } else {
        id = contentArray.length - 1;
      }
      return id;
    });
  };

  useEffect(() => {
    nextId(id);
  });

  useEffect(() => {
    prevId(id);
  });

  return (
    <div className="testimonial app__container">
      <div className="head-text">What Our Costumers Are Saying</div>
      <hr />
      <section className="testimonial-container">
        <article className="testimonial-section">
          <img src={bgQuote} alt="quote" />
          <p>{contentArray[id].paragraph}</p>
          <div className="container-text">
            {" "}
            <p className="p-text">{contentArray[id].name} </p>
            <span className="occupation">{contentArray[id].occupation}</span>
          </div>
        </article>

        <aside className="testimonial-image">
          <img src={contentArray[id].image} alt="img" />
          <div className="slider-arrows">
            <button
              className="testimonial-button testimonial-button-prev"
              onClick={prevId}
              aria-label="prev"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18">
                <path
                  fill="none"
                  stroke="#8585AC"
                  strokeWidth="3"
                  d="M11 1L3 9l8 8"
                />
              </svg>
            </button>
            <button
              className="testimonial-button testimonial-button-next"
              onClick={nextId}
              aria-label="next"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="18">
                <path
                  fill="none"
                  stroke="#8585AC"
                  strokeWidth="3"
                  d="M2 1l8 8-8 8"
                />
              </svg>
            </button>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default Testimonials;
