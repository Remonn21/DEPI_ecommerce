
function Button({ label, onClick, type = "button" }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className="w-full bg-pink text-white py-2 hover:bg-red transition duration-300"
        >
            {label}
        </button>
    );
}

export default Button;
