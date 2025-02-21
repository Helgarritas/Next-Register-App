// Components
import { Table } from "@/components/ui/table";
import TablColsReco from "./tablColsReco";
import TablRowsReco from "./tablRowsReco";
import TablFootReco from "./tablFootReco";

export default function Board() {
  return (
    <>
      <div className="mt-3 w-full border rounded-[10px] bg-card">
        <Table>
          <TablColsReco/>
          <TablRowsReco/>
          <TablFootReco/>
        </Table>
      </div>
    </>
  );
}
