"use client";

export default function SimpleButton() {
  const handleClick = () => {
    alert("Xin chào! Đây là thông báo alert");
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-gray-600 mb-6">
        Exercise 1: Simple Button Click
      </h1>
      <p className="text-gray-600 mb-6">
        Click vào button bên dưới để hiển thị thông báo alert
      </p>

      <button
        onClick={handleClick}
        className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-600 transition"
      >
        Click Me!
      </button>
    </div>
  );
}
