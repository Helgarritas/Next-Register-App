import ActiSearReco from "./actiSearReco";
// import AddEmp from "../ActionDash/AddEmp";
// import FaceApi from "@/components/faceApi/FaceApi";
import ActiFiltReco from "./actiFiltReco";
import { Camera } from "lucide-react";

export default function Actions() {
  return (
    <>
      <div className="flex gap-2">
        <ActiSearReco/>
        <ActiFiltReco/>
        <div className="ml-auto px-2.5 flex items-center justify-center border rounded-[8px] bg-card">
          <Camera className="w-5 h-5"/>
          {/* <ActiSeleReco/> */}
          {/* <FacApi/> */}
          {/* <AddEmpe/> */}
        </div>
      </div>
    </>
  )
}
