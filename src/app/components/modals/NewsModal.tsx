import React from "react";

type NewsModalProps = {
  isOpen: boolean;
  onClose: () => void; // Function to call when the modal should close (e.g., clicking a close button)
  title: string;
  content: string;
  url: string;
};

const NewsModal = ({
  isOpen,
  onClose,
  title,
  content,
  url,
}: NewsModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg w-full max-w-2xl shadow-xl relative">
        <button onClick={onClose} className="absolute top-3 right-4 text-xl">
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 dark:text-gray-300">{content}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-blue-500 hover:underline"
        >
          Read Full Article →
        </a>
      </div>
    </div>
  );
};

export default NewsModal;
