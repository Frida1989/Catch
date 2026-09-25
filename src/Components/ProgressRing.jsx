function ProgressRing({ value }) {
  return (
    <div
      className="progress-ring"
      style={{
        background: `conic-gradient(
          white ${value}%,
          #242424 ${value}% 100%
        )`,
      }}
    >
      <div className="progress-ring-center">
        <span className="progress-ring-value">Progress:{value}%</span>
      </div>
    </div>
  );
}

export default ProgressRing;
