import Image from "next/image";
import Link from "next/link";

type CardProps = {
  key: number;
  id: number;
  title: string;
  rating: number;
  img: string;
}

const Card: React.FC<CardProps> = ({id, key, title, rating, img }) => {
  return (
    <Link
    href={`/movie/${id}`}
      key={key}
      className=" card bg-base-100 w-96 drop-shadow-xl hover:scale-110 hover:transition-all hover:duration-300 relative">
      <figure>
        <Image src={img}  alt={title} className="transition-all duration-300" width={500} height={500} priority={true} /> 
      </figure>
      <div className="card-body transition-all duration-300">
        <div className="flex flex-col">
          <h2 className="card-title">{title}</h2>
        </div>
        <div className="card-actions mt-5">
          <div className="flex flex-row justify-between items-center w-full">
            <div className="badge badge-primary  text-white">
              Rating: {rating}
            </div>
            <div className="flex flex-row gap-2">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
