export const commands = [
  {
    command: "ls",
    description:
      "shows a list of all folders and files in the current directory ",
  },
  {
    command: "cd",
    description:
      "change current directory. Use this command followed by directory name e.g: cd projects",
  },
  {
    command: "cat",
    description:
      "shows description of file contents. Use command followed by file name e.g: cat server.js",
  },
  { command: "help", description: "Type 'help' to see this list" },
  { command: "home", description: "Displays the welcome screen" },
  { command: "clear", description: "Clean up your screen" },
];
