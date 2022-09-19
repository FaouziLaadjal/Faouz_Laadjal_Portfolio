import { videos } from "../../data/videos";
import { AutoCard } from "./Styles/Autocard.styled";
import { Splide, SplideSlide } from "@splidejs/react-splide";
export default function AutoProjects() {
  return (
    <Splide
      options={{
        perpage: 1,
        type: "slide",
        gap: "2em",
        padding: "2em",
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
                src={`${item.link}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
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
