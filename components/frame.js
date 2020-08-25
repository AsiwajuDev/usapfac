const { default: Link } = require("next/link");

const Frame = ({ media, name, mediaTitle }) => {
  return (
    <div className="">
      <div className="w-40">
        <div className="zoom-in">
          <div className="box bg-gray-500">
            <Link href="#">
              <a>
                <img className="mt-3 mb-1 h-24" src={media} alt={name} />
              </a>
            </Link>
          </div>
          <div className="mx-2">
            <Link href="#">
              <a className="text-green-400 leading-5 font-bold">{mediaTitle}</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
