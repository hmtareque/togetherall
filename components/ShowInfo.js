import Rating from "./Rating";
import showStyle from "../styles/ShowInfo.module.scss";
import Link from "next/link";

export const ShowInfo = ({ show }) => {
  const showSummary = (summary) => {
    return { __html: summary };
  };

  return (
    <>
      <div className={showStyle.banner}>
        <div className={showStyle.area}>
          <div className={showStyle.image}>
            {show.image ? <img src={show.image.original} /> : ""}
          </div>
          <div className={showStyle.info}>
            <Rating rating={show.rating.average} />
            <div className={showStyle.title}>{show.name}</div>
            <div
              className={showStyle.summary}
              dangerouslySetInnerHTML={showSummary(show.summary)}
            />
          </div>
        </div>
      </div>
      <div className={showStyle.content}>
        <div className="row">
          <div className="col-12 col-md-6">
            <h3 className={showStyle.sectionTitle}>Show Info</h3>
            <ul className={showStyle.infoList}>
              <li>
                <span className={showStyle.infoTitle}>Streamed on</span>
                <span className={showStyle.infoValue}>{show.network.name}</span>
              </li>
              <li>
                <span className={showStyle.infoTitle}>Schedule</span>
                <span className={showStyle.infoValue}>
                  {show.schedule.days.join(", ")}
                </span>
              </li>
              <li>
                <span className={showStyle.infoTitle}>Status</span>
                <span className={showStyle.infoValue}>{show.status}</span>
              </li>
              <li>
                <span className={showStyle.infoTitle}>Genres</span>
                <span className={showStyle.infoValue}>
                  {show.genres.join(", ")}
                </span>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6">
            <h3>Starring</h3>
            <ul className={showStyle.castList}>
              {show._embedded.cast.map((artist) => {
                return (
                  <li key={artist.id}>
                    <span className={showStyle.potrait}>
                      {artist.person.image ? (
                        <img src={artist.person.image.medium} />
                      ) : (
                        ""
                      )}
                    </span>
                    <span className={showStyle.person}>
                      {artist.person.name}
                    </span>
                    <span className={showStyle.character}>
                      {artist.character.name}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <Link href={"/"}>
          <a className={showStyle.tvShowList} >List of All TV Shows</a>
        </Link>
      </div>
    </>
  );
};
