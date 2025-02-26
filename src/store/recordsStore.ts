import { create } from 'zustand';

interface RecordsType {
  att: {[key:string]: any};
  name: string;
  date: string;
  checkIn: string;
  checkOut: string;
}

interface countedRecordsType {
  total: number,
  verified: number,
  present: number,
  late: number,
  absent: number,
  excused: number,
}

interface ObjectStore {
  records: RecordsType[];
  filteredRecords: RecordsType[];
  countedRecords: () => countedRecordsType;
  updateRecords: (index: number, newData: Partial<RecordsType>) => void;
  addRecords: (newRecord: RecordsType) => void;
  removeRecords: (index: number) => void;
  setFilteredRecords: (filtered: RecordsType[]) => void;
}

const recordsStore = create<ObjectStore>((set, get) => ({
  records: [
    { 
      att: {
        status: "present",
        verified: true
      },
      name: "Aarón Mendoza Sianquez",
      date: "12/10/2025",
      checkIn: "10:20 am",
      checkOut: "18:00 pm",
    },
    { 
      att: {
        status: "present",
        verified: true
      },
      name: "Sara Sianquez Silvestre",
      date: "12/10/2025",
      checkIn: "10:20 am",
      checkOut: "18:00 pm",
    },
    { 
      att: {
        status: "present",
        verified: true
      },
      name: "Diana de las Casas",
      date: "12/10/2025",
      checkIn: "10:20 am",
      checkOut: "18:00 pm",
    },
    { 
      att: {
        status: "present",
        verified: true
      },
      name: "Andre Osorio Brega",
      date: "12/10/2025",
      checkIn: "10:20 am",
      checkOut: "18:00 pm",
    },
    { 
      att: {
        status: "present",
        verified: true
      },
      name: "Belinda Quispe Mendez",
      date: "12/10/2025",
      checkIn: "10:20 am",
      checkOut: "18:00 pm",
    },
    { 
      att: {
        status: "present",
        verified: true
      },
      name: "Curwen Trujillo Alvarado",
      date: "12/10/2025",
      checkIn: "10:20 am",
      checkOut: "18:00 pm",
    },
    { 
      att: {
        status: "present",
        verified: true
      },
      name: "Chikiwilo Mendez Silvestre",
      date: "12/10/2025",
      checkIn: "10:20 am",
      checkOut: "18:00 pm",
    },
    { 
      att: {
        status: "present",
        verified: true
      },
      name: "Elizabeth Castro Bautista",
      date: "12/10/2025",
      checkIn: "10:20 am",
      checkOut: "18:00 pm",
    },
    { 
      att: {
        status: "present",
        verified: true
      },
      name: "Carla Quiroz Sanchez",
      date: "12/10/2025",
      checkIn: "10:20 am",
      checkOut: "18:00 pm",
    },
    { 
      att: {
        status: "present",
        verified: true
      },
      name: "Grecia Quispe Mendozas",
      date: "12/10/2025",
      checkIn: "10:20 am",
      checkOut: "18:00 pm",
    },
    { 
      att: {
        status: "present",
        verified: true
      },
      name: "Grecia Quispe Mendozas",
      date: "12/10/2025",
      checkIn: "10:20 am",
      checkOut: "18:00 pm",
    },
    { 
      att: {
        status: "present",
        verified: true
      },
      name: "Grecia Quispe Mendozas",
      date: "12/10/2025",
      checkIn: "10:20 am",
      checkOut: "18:00 pm",
    },
    { 
      att: {
        status: "absent",
        verified: true
      },
      name: "Grecia Quispe Mendozas",
      date: "12/10/2025",
      checkIn: "10:20 am",
      checkOut: "18:00 pm",
    },
    { 
      att: {
        status: "absent",
        verified: true
      },
      name: "Grecia Quispe Mendozas",
      date: "12/10/2025",
      checkIn: "10:20 am",
      checkOut: "18:00 pm",
    },
    { 
      att: {
        status: "absent",
        verified: true
      },
      name: "Grecia Quispe Mendozas",
      date: "12/10/2025",
      checkIn: "10:20 am",
      checkOut: "18:00 pm",
    },
    { 
      att: {
        status: "absent",
        verified: true
      },
      name: "Grecia Quispe Mendozas",
      date: "12/10/2025",
      checkIn: "10:20 am",
      checkOut: "18:00 pm",
    },
    { 
      att: {
        status: "late",
        verified: true
      },
      name: "Grecia Quispe Mendozas",
      date: "12/10/2025",
      checkIn: "10:20 am",
      checkOut: "18:00 pm",
    },
    { 
      att: {
        status: "late",
        verified: true
      },
      name: "Grecia Quispe Mendozas",
      date: "12/10/2025",
      checkIn: "10:20 am",
      checkOut: "18:00 pm",
    },
    { 
      att: {
        status: "late",
        verified: true
      },
      name: "Grecia Quispe Mendozas",
      date: "12/10/2025",
      checkIn: "10:20 am",
      checkOut: "18:00 pm",
    },
    { 
      att: {
        status: "late",
        verified: true
      },
      name: "Grecia Quispe Mendozas",
      date: "12/10/2025",
      checkIn: "10:20 am",
      checkOut: "18:00 pm",
    },
  ],

  filteredRecords: [],

  countedRecords: () => {
    const records = get().records;
    return records.reduce((counts, record) => {
      counts.total++;
      if (record.att.verified) counts.verified++;
      switch (record.att.status) {
        case "present":
          counts.present++;
          break;
        case "late":
          counts.late++;
          break;
        case "absent":
          counts.absent++;
          break;
        case "excused":
          counts.excused++;
          break;
        default:
          break;
      }
      return counts;
    }, {
      total: 0,
      verified: 0,
      present: 0,
      late: 0,
      absent: 0,
      excused: 0,
    });
  },

  addRecords: (newObject) =>
    set((state) => ({ records: [...state.records, newObject] })),

  removeRecords: (index) =>
    set((state) => ({
      records: state.records.filter((_, i) => i !== index),
    })),

  updateRecords: (index, newData) =>
    set((state) => {
      const updatedObjects = [...state.records];
      if (index >= 0 && index < updatedObjects.length) {
        updatedObjects[index] = { ...updatedObjects[index], ...newData };
      }
      return { records: updatedObjects };
    }),

  setFilteredRecords: (filtered) =>
    set(() => ({
      filteredRecords: filtered,
    })),
}));

export default recordsStore;
