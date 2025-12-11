import React from "react";
import { Link } from "react-router-dom";

export default function SpecialtyApplications() {
  return (
    <div>
      
      <ul>
        <li><Link to="/Bended-Glass">Curved/Bended Glass</Link></li>
        <li><Link to="/Automotive-Windscreens">Automotive Windscreens</Link></li>

      </ul>
    </div>
  );
}