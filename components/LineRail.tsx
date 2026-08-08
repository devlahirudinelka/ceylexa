export default function LineRail() {
  return (
    <div className="line-wrapper-main">
      {[0, 1].map((i) => (
        <div key={i} className="line-item-wrap">
          <div className="line-wrapper">
            <div className="line" />
            <div className="circle-dot" />
          </div>
          <div className="font-size-xsm pure-black">[ Grow Fast ]</div>
        </div>
      ))}
    </div>
  );
}
