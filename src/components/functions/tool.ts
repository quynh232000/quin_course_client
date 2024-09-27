import moment from "moment";
export const FormMartDateAgo = (date: string) => {
  let result = moment(date).fromNow();
  result = result.replace("a few seconds ago", "vừa xong");
  result = result.replace("an hour", "1 giờ");
  result = result.replace("a day", "1 ngày");
  result = result.replace("an month", "1 tháng");
  result = result.replace("an year", "1 năm");
  result = result.replace("ago", "trước");
  result = result.replace("a minute", "1 phút");
  result = result.replace("minutes", "phút");
  result = result.replace("hours", "giờ");
  result = result.replace("days", "ngày");
  result = result.replace("months", "tháng");
  result = result.replace("a month", "1 tháng");
  result = result.replace("years", "năm");
  return result;
};
export const FormatPrice = (price: number) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0,
  }).format(price);
};

export const FormatDate = (timestamp: string | Date) => {
  const date = new Date(timestamp);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
export const formatDuration = (seconds: number, is_text = true) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  if (is_text) {
    if (hours == 0) {
      if (minutes == 0) {
        return `${remainingSeconds} giây`;
      }
      return `${minutes} phút:${remainingSeconds} giây`;
    }
    return `${hours} giờ:${minutes} phút:${remainingSeconds} giây`;
  } else {
    if (hours == 0) {
      if (minutes == 0) {
        return `${
          remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds
        }`;
      }
      return `${minutes < 10 ? "0" + minutes : minutes} :${
        remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds
      } `;
    }
    return `${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds} `;
  }
};
