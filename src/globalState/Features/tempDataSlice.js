import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contract: null,
  currentId: null,
  employeeDetails: {
    employeeId: 0,
    fullNameArabic: "",
    fullNameEnglish: "",
    email: "",
    phoneNumber: "",
    nationalId: "",
    hiringDate: "",
    nationality: "",
    jobTitle: "",
    gender: "",
    departmentId: 0,
    residenceProfessionId: 0,
    employeeStatusId: 0,
    isActive: true,
    workingHours: 0,
    loanCount: 0,
    password: "",
    isLock: false,
    departmentName: "",
    residenceProfessionName: "",
    employeeStatusName: "",
  },
  tasks: [
    {
      title: "مهمة 1",
      start: new Date(),
    },
    {
      title: "مهمة 2",
      start: new Date(),
    },
  ],
};

const tempDataSlice = createSlice({
  name: "tempData",
  initialState,
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
    setEmployeeDetails: (state, action) => {
      state.employeeDetails = action.payload;
    },
    setCurrentId: (state, action) => {
      state.currentId = action.payload;
    },
    setContract: (state, action) => {
      state.contract = action.payload;
    },
    resetTempData: (state) => {
      return initialState;
    },
  },
});

export const { setTasks, setContract, resetTempData,setCurrentId, setEmployeeDetails } =
  tempDataSlice.actions;

export default tempDataSlice.reducer;
