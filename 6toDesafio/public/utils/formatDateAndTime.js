export const formatDateAndTime = (date) => {
  const options = { hour: "numeric", minute: "numeric" };
  const newDate = new Date(date);
  return newDate.toLocaleDateString("en-US", options);
};
