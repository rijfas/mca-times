const currentDate = new Date();
const DAYS = ["M", "T", "W", "T", "F"];
const TIMETABLE = [
  [
    {
      subject: "ADS",
      faculty: "Priya",
    },
    {
      subject: "ADS",
      faculty: "Priya",
    },
    {
      subject: "MF",
      faculty: "Indu",
    },
    {
      subject: "ADS LAB",
      faculty: "Pooja",
    },
    {
      subject: "ADS LAB",
      faculty: "Pooja",
    },
    {
      subject: "ADS LAB",
      faculty: "Pooja",
    },
  ],
  [
    {
      subject: "ASE",
      faculty: "Sreerekha",
    },
    {
      subject: "MF(T)",
      faculty: "Biju",
    },
    {
      subject: "ASE",
      faculty: "Sreerekha",
    },
    {
      subject: "WEB LAB",
      faculty: "Pooja",
    },
    {
      subject: "WEB LAB",
      faculty: "Pooja",
    },
    {
      subject: "WEB LAB",
      faculty: "Pooja",
    },
  ],
  [
    {
      subject: "ASE",
      faculty: "Sreerekha",
    },
    {
      subject: "ADS(T)",
      faculty: "Priya",
    },
    {
      subject: "MF",
      faculty: "Indu",
    },
    {
      subject: "ADS",
      faculty: "Priya",
    },
    {
      subject: "DF",
      faculty: "Sabeena",
    },
    {
      subject: "WEB LAB(T)",
      faculty: "Pooja",
    },
  ],
  [
    {
      subject: "PGM LAB(T)",
      faculty: "Pooja",
    },
    {
      subject: "ADS LAB(T)",
      faculty: "Pooja",
    },
    {
      subject: "DF",
      faculty: "Sabeena",
    },
    {
      subject: "ASE(T)",
      faculty: "Sreerekha",
    },
    {
      subject: "MF",
      faculty: "Biju",
    },
    {
      subject: "IR",
      faculty: "",
    },
  ],
  [
    {
      subject: "PGM LAB",
      faculty: "Pooja",
    },
    {
      subject: "PGM LAB",
      faculty: "Pooja",
    },
    {
      subject: "PGM LAB",
      faculty: "Pooja",
    },
    {
      subject: "DF",
      faculty: "Sabeena",
    },
    {
      subject: "DF(T)",
      faculty: "Sabeena",
    },
  ],
];
var currentDay = currentDate.getDay() - 1;

const dateDisplay = document.querySelector("#date-display");
const timetableDisplay = document.querySelector("#timetable-display");

const renderDateDisplay = () => {
  dateDisplay.innerHTML = "";
  DAYS.forEach((day, index) => {
    dateDisplay.innerHTML +=
      currentDay === index ? activeDayCard({ day }) : dayCard({ day });
  });
  for (let i = 0; i < dateDisplay.children.length; i++) {
    dateDisplay.children.item(i).addEventListener("click", () => {
      currentDay = i;
      renderDateDisplay();
      renderTimeTable();
    });
  }
};

const renderTimeTable = () => {
  timetableDisplay.innerHTML = `<div class="h-24 my-4 bg-gradient-to-r from-cyan-400 to-blue-500 flex justify-center items-center p-3 rounded-xl border-2 border-slate-100 shadow-lg transition-all transform-all hover:scale-105 cursor-pointer relative" onclick="navigator.clipboard.writeText('bg-gradient-to-r from-cyan-400 to-blue-500"><div class="text-slate-200 text-center text-xl"><div>S1 MCA TimeTable</div><div class="font-mono text-xs"></div></div></div>`;
  TIMETABLE[currentDay].forEach((subject, index) => {
    timetableDisplay.innerHTML +=
      index === getCurrentHour()
        ? activeSubjectCard({
            subject: subject.subject,
            faculty: subject.faculty,
          })
        : subjectCard({
            subject: subject.subject,
            faculty: subject.faculty,
          });
  });
  timetableDisplay.innerHTML += `
  <div class='flex text-xs justify-center items-center px-6 py-2 bg-white rounded-t-lg shadow-lg rounded-xl m-1 border-2 border-slate-100 text-gray-400 bg-gray-200'>Made with <span class="text-red-400 mx-1"> ❤ </span> by <a href="https://rijfas.me" class="ml-1 text-bold text-gray-500"> @rijfas</a></div>
  `;
};

const getCurrentHour = () => {
  if (currentDate.getDay() - 1 !== currentDay) return -1;
  const hour = currentDate.getHours();
  if (hour == 9) return 0;
  if (hour == 10) return 1;
  if (hour == 11) return 2;
  if (hour == 13 && currentDay != 5) return 3;
  if (hour == 14) return 4;
  if (hour == 15) return 5;
  return -1;
};

/** Components */
const subjectCard = ({ subject, faculty }) =>
  `<div class="h-24 my-3 bg-gradient-to-r from-indigo-200 to-zinc-200 flex justify-center items-center p-3 rounded-xl border-2 border-slate-100 shadow-lg transition-all transform-all hover:scale-105 cursor-pointer relative"><div class="text-slate-800 text-center"><div>${subject}</div><div class="font-mono text-xs">${faculty}</div></div></div>`;

const activeSubjectCard = ({ subject, faculty }) =>
  `<div class="h-24 my-3 bg-gradient-to-r from-yellow-400 to-pink-500 flex justify-center items-center p-3 rounded-xl border-2 border-slate-100 shadow-lg transition-all transform-all hover:scale-105 cursor-pointer relative"><div class="text-slate-200 text-center"><div>${subject}</div><div class="font-mono text-xs">${faculty}</div></div></div>`;

const dayCard = ({ day }) => `
<li class='py-2 px-6 bg-white rounded-t-lg shadow-lg rounded-xl m-1 border-2 border-slate-100 text-gray-500 bg-gray-200'>${day}</li>
`;

const activeDayCard = ({ day }) => `
<li class='py-2 px-6 bg-white rounded-t-lg shadow-lg rounded-xl m-1'>${day}</li>`;

renderDateDisplay();
renderTimeTable();
