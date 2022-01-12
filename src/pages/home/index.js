import React from "react";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate(); //like usehistory
  const handleClick = () => {
    navigate("/clients");
  };
  return (
    <div>
      <h2 className="Dxx">DX Client Management App</h2>

    </div>
  );
}
