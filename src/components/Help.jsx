import { commands } from "../utils/commands";
function Help() {
  return (
    <div className="tracking-wide ">
      <p className="mb-2">
        These custom commands will help you navigate this app.
      </p>
      <p className="mb-4">Commands are similar to commands in linux distro</p>
      <ul className="px-2 w-full">
        {commands.map((command, index) => (
          <li key={index} className="flex gap-2">
            <span className="inline-block min-w-16">{command.command}</span>
            <span>{command.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Help;
