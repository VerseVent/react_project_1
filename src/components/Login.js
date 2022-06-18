import { Link } from "react-router-dom";
import React, { Component } from "react";

export function Login() {
  return (
    <div>
      <h1>Login</h1>
      <Link to="/activities">
        <button>Login</button>
      </Link>
    </div>
  );
}
