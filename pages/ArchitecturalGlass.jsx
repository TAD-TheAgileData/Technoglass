import React from "react";
import { Link } from "react-router-dom";

export default function ArchitecturalGlass() {
  return (
    <div>
      
      <ul>
        <li><Link to="/low-e">Low-E & Solar Control Glass</Link></li>
        <li><Link to="/insulated">Insulated (Double/Triple Glazing)</Link></li>
        <li><Link to="/laminated">Laminated Glass</Link></li>
        <li><Link to="/ceramic">Ceramic Frit & Back-Painted Glass</Link></li>
      </ul>
    </div>
  );
}
