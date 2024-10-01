interface CardProps {
  id: number;
  title: string;
  rating: number; // Mengubah GLfloat menjadi number
  img: string;
}

const Card: React.FC<CardProps> = ({ id, title, rating, img }) => {
  return (
    <section
      key={id}
      className=" card bg-base-100 w-96 drop-shadow-xl hover:scale-110 hover:transition-all hover:duration-300 relative">
      <figure>
        <img src={img} alt={title} className="transition-all duration-300" />
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
    </section>
  );
};

export default Card;
