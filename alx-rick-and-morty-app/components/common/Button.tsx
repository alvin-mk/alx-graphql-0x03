import React from "react";

// Define the types for ButtonProps
interface ButtonProps {
  title: string; // Button text
  onClick: () => void; // Click event handler
  styles?: string; // Optional custom styles
  type?: "button" | "submit" | "reset"; // Button type
  disabled?: boolean; // Disabled state
}

const Button: React.FC<ButtonProps> = ({ title, onClick, styles = "", type = "button", disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition disabled:bg-gray-400 disabled:cursor-not-allowed ${styles}`}
    >
      {title}
    </button>
  );
};

export default Button;
