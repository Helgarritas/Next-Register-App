import ChartDay from "./chartDay";
import ChartWeek from "./chartWeek";
import ChartWidget from "./chartWidget";
import ChartMonth from "./chartMonth";

export default function Charts() {
  return (
    <>
      <div className="grid grid-cols-3 gap-5">
        <ChartDay/>
        <ChartWeek/>
        <ChartWidget/>
        <ChartMonth/>
      </div>
    </>
  )
}
