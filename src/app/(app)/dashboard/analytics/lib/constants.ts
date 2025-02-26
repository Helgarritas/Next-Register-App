// Datos del gráfico
export const chartData = [
  { day: "Monday", present: 186, late: 80, absent: 40 },
  { day: "Tuesday", present: 305, late: 200, absent: 120 },
  { day: "Wednesday", present: 237, late: 120, absent: 130 },
  { day: "Thursday", present: 73, late: 190, absent: 100 },
  { day: "Friday", present: 209, late: 130, absent: 140 },
  { day: "Saturday", present: 214, late: 140, absent: 170 },
  { day: "Sunday", present: 214, late: 140, absent: 200 },
];
  
export const chartConfig = {
  present: { label: "Present", color: "hsl(var(--green-1))" },
  late: { label: "Late", color: "hsl(var(--amber-1))" },
  absent: { label: "Absent", color: "hsl(var(--red-1))" },
} as const;

export const weekOptions = ["1st Week", "2nd Week", "3rd Week", "4th Week", "5th Week"];

export const getCurrentWeek = (): string => {
  const date = new Date();
  const totalDays = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const week = Math.ceil((date.getDate() * 5) / totalDays);


  switch (week) {
    case 1:
      return "1st week";
    case 2:
      return "2nd week";
    case 3:
      return "3rd week";
    case 4:
      return "4th week";
    case 5:
      return "5th Week";
    default:
      return `${week}th week`;
  }
};

