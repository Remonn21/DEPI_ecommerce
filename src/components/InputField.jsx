function InputField({ type, placeholder, value, onChange }) {
    return (
        <div>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full px-4 py-2 border border-navyBlue border-opacity-15 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
        </div>
    );
}

export default InputField;
