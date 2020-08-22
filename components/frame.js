const Frame = ({ cardTitle, cardBody }) => {
  return (
    // <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
    <div className="mb-3">
      <div className="w-32">
        <div className="zoom-in">
          <div className="box p-5 bg-gray-500 h-24">
            <div className="text-3xl font-bold leading-8 mt-2 mb-5">
              {cardTitle}
            </div>

            <div className="flex">
              <div className="text-lg text-gray-600 mt-1">{cardBody}</div>
              <div className="ml-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
