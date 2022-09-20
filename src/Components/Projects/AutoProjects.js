import { videos } from "../../data/videos";
import { AutoCard } from "./Styles/Autocard.styled";
import { Splide, SplideSlide } from "@splidejs/react-splide";
export default function AutoProjects() {
  return (
    <Splide
      options={{
        perpage: 1,
        type: "slide",

        pagination: false,
      }}
      aria-label="My Automation  Projects"
    >
      {videos.map((item, index) => (
        <SplideSlide key={item.id}>
          <AutoCard>
            <h2>{item.title}</h2>

            <div className="vidContainer">
              <iframe
                loading="lazy"
                src={`${item.link}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; fullscreen ; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>

            <div className="text">
              <span>Objective:</span>
              <p>{item.discription}</p>
            </div>
          </AutoCard>
        </SplideSlide>
      ))}
    </Splide>
  );
}
