import scheduleStyle from "../styles/Schedule.module.scss";
import { ShowListItem } from "../components/ShowListItem";

export default function ScheduleStyle({ shows }) {
  return (
    <>
      <div className={scheduleStyle.banner}>
        <div className={scheduleStyle.info}>
          <div className={scheduleStyle.title}>TV Shows</div>
          <div className={scheduleStyle.description}>List of TV Shows</div>
        </div>
      </div>
      <div className={scheduleStyle.content}>
        <div className="row">
        {shows.map((show) => {
        return (
          <ShowListItem show={show.show} />
        )})}
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`https://api.tvmaze.com/schedule`);
  const shows = await res.json();

  if (!shows) {
    return {
      notFound: true,
    };
  }

  console.log(shows);

  return {
    props: { shows }, 
  };
};
