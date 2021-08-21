import calendar from "./pablo-68.png";
import location from "./pablo-51.png";

import "./eventcard.css";

const EventCard = ({
  props,
  name,
  description,
  day,
  street,
  postcode,
  city,
  country,
  organizer,
  imageUrl,
}) => {
  return (
    <article className="event-card-container">
      <div className="img-container">
        <figure>
          <img
            className="img"
            src="https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80eUrl"
            alt="Event"
          />
        </figure>
      </div>
      <div className="info-container">
        <section className="name">
          <h4>Event Name{name}</h4>
        </section>

        <section className="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book{description}
        </section>
        <section className="when-where">
          <div className="details">
            <img src={calendar} alt="calendar" height="24px" />
            <text>12 September 2021{day}</text>
          </div>

          <div className="details">
            <img src={location} alt="location" height="24px" />
            <text>Birmingham{city}</text>
          </div>
        </section>

        <section>
          <div className="buttonContainer">
            <a href="/interest">
              <button type="button" className="buttons">
                I'm interested
              </button>
            </a>
            <a href="/signup">
              <button type="button" className="buttons">
                Sign Up
              </button>
            </a>
          </div>
        </section>
      </div>
    </article>
  );
};
export default EventCard;
