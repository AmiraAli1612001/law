export const deleteRecord = (event, ele) => {
  event.target.closest(ele ?? "tr").style.opacity = 0.3;
};
