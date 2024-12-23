"use client";
import "./issue.css";
import LinkHeader from "@/components/shared/pageShared/linkHeader/LinkHeader";
import ScreenWrapper from "@/components/shared/screenWrapper/Wrapper";
import contractsData from "@/fakeData/contractsData.json";
import { toggleAddRecordPopup, toggleEditEmployee } from "@/globalState/Features/popupsSlice";
import { useDispatch } from "react-redux";
import ClientDetails from "@/components/pages/clients/client/ClientDetails";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Issue = ({ params: { token } }) => {
  const [data, setData] = useState({});
  const apiKey = process.env.NEXT_PUBLIC_DEV;

  const dispatch = useDispatch()
  const contractData = contractsData.find((issue) => issue.id == token);
  const { id, title, date, status } = contractData;

  const getClient = async () => {
    let id = window.localStorage.getItem("clientID")
    try {
      const response = await fetch(`${apiKey}/Customer/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        cache: "no-store",
      });

      if (response.ok) {
        const customer = await response.json();
        setData(customer)
      } 
    } catch (error) {
      console.error("Error fetching client:", error);
      toast.error("حدث خطأ أثناء جلب البيانات");
    }
  };

  useEffect(()=>{
    getClient()
  } , [])
  return (
    <ScreenWrapper className="flex-1 p-4 flex flex-col gap-4">
      <LinkHeader
        title={`العملاء`}
        to={`/clients`}
        title2={`العميل رقم ${token}`}
        to2={`/clients/${token}`}
      />
      <div className="flex flex-col gap-4">
        {/*start  */}
        <div
          className={`bg-bgGreen font-medium flex gap-6 p-4 items-center issue-details-header rounded-lg relative`}
        >
          <div className="row-data-content">
            <p className="">{data?.fullNameArabic}</p>
          </div>
          {/* <div className="row-data-content">
            <p className="" dir="ltr">
              {date}
            </p>
          </div> */}
          {/* <div className="row-data-content ms-auto">
            <button
              className="bg-mainRed bg-opacity-[0.3] text-white px-4 py-2 rounded text-sm"
              onClick={() => dispatch(toggleAddRecordPopup("record"))}
            >
              تعديل
            </button>
          </div> */}
        </div>
        <ClientDetails id={token} contractData={contractData} />
        {/*end  */}
      </div>
    </ScreenWrapper>
  );
};

export default Issue;
