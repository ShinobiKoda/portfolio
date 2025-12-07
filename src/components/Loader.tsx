export default function Loader() {
  return (
    <div className="ball-cont" aria-label="Loading" role="status">
      <div className="ying-ball-wing" />
      <div className="yang-ball-wing" />
      <div className="ying-parent parent">
        <div className="ying ball-child" />
      </div>
      <div className="yang-parent parent">
        <div className="yang ball-child" />
      </div>
    </div>
  );
}
