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
    server: ["road-trip-api.js", "leewah-api.js"],
    client: ["road-trip.js", "road-trip-dashboard.js"],
  },
  devOps: { docker: ["microservices.yml"] },
};

export const dataObj = {
  "road-trip-api.js": {
    title: "bus agency management system api",
    stack: ["node js", "express/REST", "mongodb", "mongoose", "socket.io"],
    link: "https://github.com/ngwasidwan/Easy-travels-server",
    features: [
      "server app for a bus agency, handling all internal and external agency processes",
      "App uses monolithic architectural system with mvc pattern",
      "2FA for admin access",
      "jwt authentication with RBAC",
      "online booking of tickets with live seat update functionality with socket.io",
    ],
  },

  "leewah-api.js": {
    title: "school management system api",
    stack: ["node js", "express/REST", "mongodb", "mongoose"],
    link: "https://github.com/ngwasidwan/leewah",
    features: [
      "server app for a school management system",
      "App uses monolithic architectural system with mvc pattern",
      "2FA for authorizing user access",
      "jwt authentication with RBAC",
      "Registering of students, payment of fees, accessing past exam questions",
    ],
  },

  "road-trip-dashboard.js": {
    title: "road trip admin dashboard",
    stack: ["react js", "context api", "tailwind css"],
    link: "https://easy-travels-admin-dashboard.vercel.app",
    features: [
      "client app for managing all internal and external bus agency processes",
      "seats selection updates in real time",
      "2FA for authorizing admin access",
      "qr scanner for verifying traveling tickets",
      "storing and retrieving all booking data",
      "computing the number of seats booked, calculating the number of seats already checked onboard by ticket checkers etc",
    ],
  },

  "road-trip.js": {
    title: "Road Trip",
    link: "https://easy-travels-app.vercel.app",
    stack: ["react js", "context api", "tailwind css"],
    features: [
      "fast and easy booking of bus tickets online with momo payments",
      "seats selection updates in real time",
      "Best client optimization techniques to enhance user experience",
      "implement caching strategies on the client to minimize cost",
      "Search booking by bookingId and phone number,reschedule functionality etc",
    ],
  },

  "microservices.yml": {
    title: "microservices demo app",
    stack: ["docker", "node js", "express"],
    features: [
      "App is built following the  microservices architecture with mvc pattern",
      "All requests pass through the express api gateway.",
      "App is made of a users service, students service, school service and payment service",
      "Each service is connected to its own database to enhance scalability",
      "2FA with jwt authentication at api gateway",
    ],
    link: "#example-microservices",
  },
};
