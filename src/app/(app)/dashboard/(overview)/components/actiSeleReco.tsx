// Hooks
// import { useEffect, useCallback } from "react";

// Components
// import Select from "@/components/Select";

// Custom Hooks
// import useForm from "@/hooks/useForm";
// import useFetch from "@/hooks/useFetch";

// Store
// import useUnitStore from "@/store/useUnitsStore/useUnitsStore";
// import useRecordStore from "@/store/useRecordStore/useRecordStore";

// enum Department {
//   Initial    = "",
//   Mechanical = "mechanical", 
//   Accounting = "accounting",
//   Logistic   = "logistic"
// }

export default function ActiSeleReco() {
  // // CustomHooks
  // const { fetchData } = useFetch();
  // const { formData, handleChange } = useForm({ department: Department.Initial });
  // // Store
  // const updateRecords = useRecordStore(state => state.updateRecords);
  // const units = useUnitStore(state => state.units);
  // const updateUnits = useUnitStore(state => state.updateUnits);

  // const fetchAndDispatch = useCallback(async () => {
  //   try {
  //     const fetchedData = await fetchData(
  //       `/att?date=${encodeURIComponent(units?.date || "")}&department=${encodeURIComponent(formData?.department)}`
  //     );

  //     updateRecords(fetchedData);
  //   } catch (error) {
  //     console.error("Error fetching and dispatching data:", error);
  //   }
  // }, [formData]);
  
  // useEffect(() => { 
  //   if (formData?.department) {
  //     fetchAndDispatch();
  //     updateUnits({date: units.date, department: formData.department });
  //   }
  // }, [formData]);

  return (
    <>
      <div>
        {/* <Select 
          items={Object.values(Department).filter(dept => dept !== Department.Initial)} 
          handleChange={handleChange}
          initial={units?.department || Department.Initial}
        /> */}
      </div>
    </>
  )
}
