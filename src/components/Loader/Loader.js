import "./Loader.scss";

const Loader = ({
  size = "4px",
  speed = "1s",
  width = "36px",
  height = "36px",
  color,
}) => {
  return (
    <div className="container">
      <div
        className="loader"
        style={{
          borderWidth: size.toString(),
          width: width.toString(),
          height: height.toString(),
          borderLeftColor: color,
          animationDuration: speed.toString(),
        }}
      ></div>
    </div>
  );
};

export default Loader;
