import PrevCmd from "./PrevCmd";

function ChangeDirectory({ command, path, el, index }) {
  return (
    <div className="max-w-full tracking-wider">
      <PrevCmd el={el} index={index} />
    </div>
  );
}

export default ChangeDirectory;
