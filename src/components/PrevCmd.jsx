import { useAppContext } from "../lib/ContextApi";

function PrevCmd({ command, id }) {
  const { directoryArr } = useAppContext();
  const curDir = directoryArr.at(id - 1);

  // console.log(curDir, directoryArr, id);

  return (
    <div className="max-w-full tracking-wider">
      <span className="text-primary ">
        sabipikin@njaka<span className="text-white">:</span>
        <span className="text-blue-500">~</span>{" "}
        <span className="text-blue-500">{curDir}</span>
        <span className="text-white pr-1">$</span>
        <span className="relative">
          <span className="text-white ">{command}</span>
        </span>
      </span>
    </div>
  );
}

export default PrevCmd;
