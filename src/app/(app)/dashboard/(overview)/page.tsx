import Header from "./components/header";
import Kpis from "./components/kpis";
import Actions from "./components/actions";
import Board from "./components/table";

export default function page() {
  return (
    <div className="flex flex-col gap-6">
      <Header/>
      <Kpis/>
      <div>
        <Actions/>
        <Board/>
      </div>
    </div>
  )
}
