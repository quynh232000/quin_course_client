import React, { useEffect, useRef, useState } from "react";

interface ToastProps {
  title?: string;
  message?: string;
  type?: "success" | "info" | "warning" | "error";
  // type?: string;
  duration?: number;
}

function ToastMessage({
  title = "Thành công!",
  message = "",
  type = "success",
  duration = 3000,
}: ToastProps) {
  const [isClose, setIsClose] = useState(false);
  const toastRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto-remove toast
    const autoRemoveId = setTimeout(() => {
      setIsClose(true);
    }, duration + 1000);

    // Clean up timeout on component unmount
    return () => {
      clearTimeout(autoRemoveId);
    };
  }, [duration]);

  // Remove toast on click of close button
  const handleClick = (e: React.MouseEvent) => {
    if (e.target instanceof HTMLElement && e.target.closest(".toast__close")) {
      setIsClose(true);
    }
  };

  const icons = {
    success: "fas fa-check-circle",
    info: "fas fa-info-circle",
    warning: "fas fa-exclamation-circle",
    error: "fas fa-exclamation-circle",
  };
  const icon = icons[type];
  const delay = (duration / 1000).toFixed(2);
  if (isClose) {
    return <></>;
  }
  return (
    <div
      id="toast"
      ref={toastRef}
      className={`toast toast--${type}` + " "}
      style={{
        animation: `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`,
      }}
      onClick={handleClick}
    >
      <div className="toast__icon">
        <i className={icon}></i>
      </div>
      <div className="toast__body">
        <h3 className="toast__title">{title}</h3>
        <p className="toast__msg ">{message}</p>
      </div>
      <div className="toast__close" onClick={handleClick}>
        <i className="fas fa-times"></i>
      </div>
    </div>
  );
}

export default ToastMessage;
