import "./Cards.css";

const Cards = (props) => {
  const {
    id,
    Author_name,
    Blog_title,
    Images,
    Author_image,
    Read_time,
    Publish_Date,
    Tag,
  } = props.blog;

  return (
    <>
      <div className="card w-full bg-base-100 shadow-2xl mb-10">
        <figure>
          <img src={Images} alt="Shoes" />
        </figure>
        <div className="card-body px-3">
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-5">
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src={Author_image} />
                </div>
              </div>
              <div>
                <h1 className="font-bold">{Author_name}</h1>
                <p>{Publish_Date}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <p>{Read_time} min read</p>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="px-3">
            <h1 className="text-3xl font-bold my-5">{Blog_title}</h1>
            <p className="font-medium pb-5">{Tag}</p>
            <a className="link link-info">Mark as read</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
