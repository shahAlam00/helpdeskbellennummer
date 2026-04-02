import React from "react";

const ContactBar = () => {
  return (
<div
  style={{
    position: "fixed",
    top: "50%",
    right: "-52px", // IMPORTANT: bahar nikalta hai
    transform: "rotate(-90deg)",
    transformOrigin: "right center",
    zIndex: 99999,
  }}
>
  <a
    href="tel:+18778949715"
    style={{
      backgroundColor: "#6FB8D6",
      color: "#36454F",
      padding: "12px 24px",
      borderRadius: "10px 10px 0 0",
      boxShadow: "0 10px 25px rgba(0,0,0,0.35)",
      fontWeight: "bold",
      letterSpacing: "1px",
      display: "inline-block",
      textDecoration: "none",
      cursor: "pointer",
      whiteSpace: "nowrap",
    }}
  >
    📞 +1 877-894-9715
  </a>
</div>


  );
};

export default ContactBar;
