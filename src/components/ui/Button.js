function Button({ children, href, onClick, className = "", type = "button", ...props }) {
    const baseClass = "group lg:px-4 px-3 py-3 rounded-lg border border-neutral-900 text-sm font-semibold flex items-center gap-2.5 transition-all cursor-pointer";

    const combinedClassName = `${baseClass} ${className}`.trim();

    if (href) {
        return (
            <a href={href} className={combinedClassName} {...props}>
                {children}
            </a>
        );
    }

    const buttonType = (type === "with-icon" || type === "reverse-icon") ? "button" : type;

    return (
        <button
            type={buttonType}
            onClick={onClick}
            className={combinedClassName}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;