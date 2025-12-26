import React from "react";
import { Link } from "react-router-dom";

export default function SafetySecurity() {
  return (
    <div>
      
      <ul>
        <li><Link to="/bullet-resistant">Bullet Resistant Glass</Link></li>
        <li><Link to="/tempered">Tempered Glass</Link></li>
        <li><Link to="/heat-strengthened">Heat Strengthened Glass</Link></li>
      </ul>
    </div>
  );
}
