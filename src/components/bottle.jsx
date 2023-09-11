const Bottle = (props) => {
  const { perData, handleRemove, handlePurchase } = props;
  const { id, name, seller, price, rating, img, shipping } = perData;
  return (
    <div className="p-8 shadow-lg m-8">
      <h1>{name}</h1>
      <p>{seller}</p>
      <p>{price}</p>
      <h2>{rating}</h2>
      <img src={img} alt={name} />
      <p>{shipping}</p>
      <button className="btn" onClick={() => handlePurchase(id)}>
        Purchase Product
      </button>{' '}
      <button className="btn" onClick={() => handleRemove(id)}>
        Remove from card
      </button>{' '}
    </div>
  );
};

export default Bottle;
