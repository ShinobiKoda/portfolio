import Loader from "../Loader";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-(--background-color)">
      <Loader />
    </div>
  );
};

export default LoadingSpinner;
