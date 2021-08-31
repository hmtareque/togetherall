import Rating from "./Rating";
import Link from "next/link";
import Image from "next/image";
import showItemStyle from "../styles/ShowListItem.module.scss";

export const ShowListItem = ({ show }) => {
  return (
    <div className="col-6 col-sm-4 col-md-3 col-lg-2">
      <div className={showItemStyle.showItem}>
        <Link href={"/shows/" + show.id}>
          {show.image ? (
            <Image
              className={showItemStyle.showImage}
              src={`${show.image.medium}`}
              alt={show.name}
            />
          ) : (
            ""
          )}
        </Link>
        <Rating rating={show.rating.average} />
        <div className={showItemStyle.showName}>{show.name}</div>
      </div>
    </div>
  );
};
