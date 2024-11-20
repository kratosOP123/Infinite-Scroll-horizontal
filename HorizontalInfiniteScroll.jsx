const HorizontalInfiniteScroll = () => {
  const urls = [
    {
      link: "https://cdn.pixabay.com/photo/2024/07/23/13/03/moon-8915307_640.png",
      name: "Girl on moon",
    },
    {
      link: "https://cdn.pixabay.com/photo/2023/09/27/02/39/pumpkin-8278499_640.jpg",
      name: "pumpkin",
    },
    {
      link: "https://cdn.pixabay.com/photo/2022/08/06/11/06/insect-7368427_640.jpg",
      name: "ant",
    },
    {
      link: "https://cdn.pixabay.com/photo/2024/10/27/07/12/women-9152739_640.jpg",
      name: "women doing agriculture",
    },
    {
      link: "https://cdn.pixabay.com/photo/2024/05/19/13/40/daisy-8772631_640.jpg",
      name: "",
    },
    {
      link: "https://cdn.pixabay.com/photo/2023/12/24/16/43/autumn-8467482_640.jpg",
      name: "",
    },
    {
      link: "https://cdn.pixabay.com/photo/2022/08/30/00/24/jump-7420029_640.png",
      name: "",
    },
    {
      link: "https://cdn.pixabay.com/photo/2023/09/25/20/38/lisbon-8275994_640.jpg",
      name: "",
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex space-x-8 overflow-hidden group mx-40 p-10 border-y-4">
        <div className="flex animate-scroll space-x-16 group-hover:paused">
          {urls.map((url, indx) => (
            <img
              key={indx}
              src={url.link}
              title={url.name}
              alt=""
              className="max-w-none h-60 hover:scale-125 rounded-xl shadow-lg cursor-pointer"
            />
          ))}
        </div>
        <div
          className="flex animate-scroll space-x-16 group-hover:paused"
          aria-hidden="true"
        >
          {urls.map((url, indx) => (
            <img
              key={indx}
              src={url.link}
              title={url.name}
              alt=""
              className="max-w-none h-60 hover:scale-125 rounded-xl shadow-lg cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalInfiniteScroll;
