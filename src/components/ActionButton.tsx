"use client";
import React from "react";
import '../styles/colors.css';

interface ActionButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  text,
  className = "",
  onClick,
}) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default ActionButton;

/*
.va-appointment-btn {
  background: var(--va-bg);
  border-color: var(--va-border);
  color: var(--va-text);
  transition: all 0.2s;
}
.va-appointment-btn:hover {
  background: var(--va-hover-bg);
  border-color: var(--va-hover-border);
  color: var(--va-hover-text);
}
*/
