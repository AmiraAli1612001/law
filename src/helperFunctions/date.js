"use client";
import { store } from "@/globalState/store";
import moment from "moment-hijri";

export function dateNow(date = null) {
  const isHijriDate = store.getState().formats.isHijriDate;
  const islamicDate = moment().format("iYYYY-iMM-iDD"); // Hijri Date
  if (isHijriDate) {
    return islamicDate;
  } else {
    return new Date(Date.now())
      .toISOString()
      .split("T")[0]
      .split("/")
      .reverse()
      .join("-");
  }
}
export function convertDate(date = null, toHijri = true) {
  if (!date) {
    date = new Date().toISOString().split("T")[0];
  }

  if (toHijri) {
    return moment(date, "YYYY-MM-DD").format("iYYYY-iMM-iDD");
  } else {
    return moment(date, "iYYYY-iMM-iDD").format("YYYY-MM-DD");
  }
}
export function monthName(date = null, month = 1) {
  const isHijriDate = store.getState().formats.isHijriDate;
  const islamicDate = moment().format("iYYYY-iMM-iDD"); // Hijri Date
  if (isHijriDate) {
    const months = [
      "محرم",
      "صفر",
      "ربيع الاول",
      "ربيع الثاني",
      "جمادى الاولى",
      "جمادى الثانية",
      "رجب",
      "شعبان",
      "رمضان",
      "شوال",
      "ذو القعدة",
      "ذو الحجة",
    ];
    return months[month - 1];
  } else {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[month - 1];
  }
}
