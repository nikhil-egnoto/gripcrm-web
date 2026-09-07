import { ChevronRight } from "lucide-react";

function Button({ children, href, onClick, className = "", type = "button", ...props }) {
    const baseClass = "group lg:px-5 px-3 py-3 rounded-md  border border-black text-sm font-medium flex items-center gap-2.5 transition-all cursor-pointer shadow-sm relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:transform-X-0 before:origin-left before:scale-x-0 before:w-full before:h-full before:transition-all before:duration-300 hover:before:scale-x-100";

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