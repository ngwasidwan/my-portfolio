export const CARET_SIZE = 8;
export const NEXT_CARET_POSITION = 8.395843505859375;
export const excludedKeys = [
  "ArrowRight",
  "ArrowLeft",
  "Backspace",
  "ArrowUp",
  "ArrowDown",
  "CapsLock",
  "Shift",
  "Control",
  "Alt",
  "Enter",
  "Escape",
  "F1",
  "F2",
  "F3",
  "F4",
  "F5",
  "F6",
  "F7",
  "F8",
  "F9",
  "F10",
  "F11",
  "F12",
  "Meta",
  "Insert",
  "Tab",
  "PageUp",
  "PageDown",
  "Delete",
];

export const fileTree = {
  software: {
    node: ["easy-travels.js", "easy-travels-dashboard.js"],
    react: ["queens's cuisine"],
  },
  devOps: { docker: ["microservices.yml"] },
};

export const dataObj = {
  "easy-travels-dashboard.js": {
    title: "easy travels admin dashboard",
    stack: [
      "react",
      "node js",
      "tailwind css",
      "socket.io",
      "express",
      "mongodb",
      "mongoose",
    ],
    link: "https://easy-travels-admin-dashboard.vercel.app",
    description: [
      "web app for managing all internal and external bus agency processes",
      "seats selection updates in real time",
      "2FA for authorizing admin access",
      "qr scanner for verifying traveling tickets",
      "storing and retrieving all booking data",
      "computing the number of seats booked, calculating the number of seats already checked onboard by ticket checkers etc ",
    ],
  },
  "easy-travels.js": {
    title: "easy travels",
    link: "https://easy-travels-app.vercel.app",
    stack: [
      "react",
      "node js",
      "tailwind css",
      "socket.io",
      "express",
      "mongodb",
      "mongoose",
    ],
    description: [
      "web app for managing online booking of bus tickers with momo payment",
      "seats selection updates in real time",
      "booking reschedule functionality.",
      "Search booking by bookingId and phone number",
    ],
  },

  "microservices.yml": {
    title: "leewah api ",
    stack: ["docker", "node js", "express"],
    description: [
      "app is made of 2 services which can be accessed through an express gateway.",
      "Each service is connected to its own database.",
      "authentication at express api gateway",
      "only authenticated users can access a student account",
    ],
    link: "#example-microservices",
    aim: "demo app for mastering docker internals",
  },
};
