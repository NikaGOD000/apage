export function Button({ children, onClick, variant }) {
  const style = variant === "ghost" ? "bg-transparent hover:bg-white hover:bg-opacity-20" : "bg-white";
  return (
    <button onClick={onClick} className={`text-white p-2 rounded-full ${style}`}>
      {children}
    </button>
  );
}
