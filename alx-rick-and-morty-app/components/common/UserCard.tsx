import React from "react";
import { UserProps } from "@/components/common/UserProps"; // Using your requested import path

const UserCard: React.FC<UserProps> = ({ name, username, email, phone, website }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold text-gray-800">{name}</h2>
      <p className="text-gray-600">
        <strong>Username:</strong> {username}
      </p>
      <p className="text-gray-600">
        <strong>Email:</strong> {email}
      </p>
      <p className="text-gray-600">
        <strong>Phone:</strong> {phone}
      </p>
      <p className="text-gray-600">
        <strong>Website:</strong>{" "}
        <a
          href={`http://${website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          {website}
        </a>
      </p>
    </div>
  );
};

export default UserCard;