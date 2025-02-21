// Hooks
// import { useState, useEffect } from "react";

// Components
import { Input } from "@/components/ui/input";

// CustomHooks
// import useForm from "@/hooks/useForm";

// Store
// import useRecordStore from "@/store/useRecordStore/useRecordStore";

export default function ActiSearReco() { 
  // Custom Hook para manejar el formulario
  // const { formData, handleChange } = useForm({ search: "" });

  // Store
  // const records = useRecordStore((state) => state.records);
  // const updateRecords = useRecordStore((state) => state.updateRecords);

  // Estado local para los registros filtrados
  // const [filteredRecords, setFilteredRecords] = useState(records);

  // useEffect(() => {
  //   const searchTerm = formData?.search?.trim().toLowerCase();

  //   if (searchTerm.length > 3) {
  //     const filteredData = records.filter((obj) => 
  //       obj.name.toLowerCase().includes(searchTerm)
  //     );

  //     updateRecords(filteredData); 
  //     console.log(records);
  //   } else {
  //     updateRecords(records);
  //   }
  // }, [formData.search]);

  // useEffect(() => {
    

  // }, []);

  return (
    <div>
      <Input 
        name="search"
        type="search"
        placeholder="Search..." 
        // style={{ background: "linear-gradient(to top, rgba(255, 255, 255, 100) 0%, rgba(255, 255, 255, .5) 100%)" }}
        className="md:w-[100px] lg:w-[300px] bg-card"
      />
    </div>
  );
}
