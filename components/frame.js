const Frame = ({ media, name, mediaTitle }) => {
  return (
    <div className="">
      <div className="w-40">
        <div className="zoom-in">
          <div className="box bg-gray-500">
            <img className="mt-3 mb-1 h-24" src={media} alt={name} />
          </div>
          <div>
            <p className="text-green-400 leading-5 font-bold mx-1">
              {mediaTitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
