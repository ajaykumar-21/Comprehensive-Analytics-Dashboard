type Props = {
  label: string;
  onClick: () => void;
};

const PrimaryButton = ({ label, onClick }: Props) => (
  <button
    onClick={onClick}
    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
  >
    {label}
  </button>
);

export default PrimaryButton;
