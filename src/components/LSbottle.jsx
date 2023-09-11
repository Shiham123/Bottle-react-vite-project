const LSbottle = (props) => {
  const { localStorage, data } = props;

  const matchingData = localStorage.filter((storageId) =>
    data.some((item) => item.id === storageId)
  );

  return (
    <div>
      {matchingData.map((item) => {
        const matchingItem = data.find((dataItem) => dataItem.id === item);

        if (matchingItem)
          return (
            <div>
              <img src={matchingItem.img} width="100px" alt="" />
            </div>
          );
      })}
    </div>
  );
};

export default LSbottle;
