export default function Button({ onShow, children }) {
  return (
    <button className="button" onClick={onShow}>
      {children}
    </button>
  );
}
