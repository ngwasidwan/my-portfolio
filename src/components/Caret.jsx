function Caret({ moveCaretTo }) {
  return (
    <span
      className="animate-blink bg-white h-1 w-2 inline-block absolute bottom-0"
      style={{
        left: `${moveCaretTo}px`,
      }}
    >
      &nbsp;
    </span>
  );
}

export default Caret;
