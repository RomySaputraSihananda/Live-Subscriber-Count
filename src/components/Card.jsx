const Card = ({ data }) => {
  return (
    <div className="cursor-pointer w-fit p-3 m-auto" key={data.id}>
      <img
        className="m-auto p-1 rounded-full"
        src={data.avatar}
        alt={`avatar ${data.title}`}
      />
      <p>{data.title}</p>
    </div>
  );
};

export default Card;
