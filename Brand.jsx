import { motion } from "framer-motion";

const Marquee = () => {
  const upperMarquee = [
    "/01.svg",
    "/02.svg",
    "/03.svg",
    "/04.svg",
    "/05.svg",
    "/06.svg",
    "/07.svg",
    "/08.svg",
    "/09.svg",
    "/10.svg",
    "/11.svg",
  ];

  const lowerMarquee = [
    "/12.svg",
    "/13.svg",
    "/14.svg",
    "/15.svg",
    "/16.svg",
    "/17.svg",
    "/18.svg",
    "/19.svg",
    "/20.svg",
    "/21.svg",
    "/22.svg",
  ];
  return (
    <div className="container mx-auto">
      <div className="flex MyGrad">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex flex-shrink-0"
            >
          {upperMarquee.map((image, indx) => {
            return <img className="size-40 mr-20" key={indx} src={image} />;
          })}
        </motion.div>

        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex flex-shrink-0"
            >
          {upperMarquee.map((image, indx) => {
            return <img className="size-40 mr-20" key={indx} src={image} />;
          })}
        </motion.div>
      </div>

      <div className="flex MyGrad">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex flex-shrink-0"
            >
          {lowerMarquee.map((image, indx) => {
            return <img className="size-40 mr-20" key={indx} src={image} />;
          })}
        </motion.div>

        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex flex-shrink-0"
            >
          {lowerMarquee.map((image, indx) => {
            return <img className="size-40 mr-20" key={indx} src={image} />;
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
