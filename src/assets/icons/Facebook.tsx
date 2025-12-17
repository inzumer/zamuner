interface FacebookProps {
    width?: number;
    height?: number;
    className?: string;
    accessibility?: string;
}

const Facebook: React.FC<FacebookProps> = ({ width = 18, height = 18, className, accessibility = 'Facebook' }) => (
    <svg
        width={width}
        height={height}
        className={className}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby="iconTitle"
    >
        <title id="iconTitle">{accessibility}</title>
        <path
            d="M17.3232 8.6987C17.3232 4.05766 13.5565 0.291016 8.9155 0.291016C4.27446 0.291016 0.507812 4.05766 0.507812 8.6987C0.507812 12.768 3.40006 16.1563 7.23396 16.9382V11.221H5.55242V8.6987H7.23396V6.59678C7.23396 4.9741 8.55397 3.65409 10.1767 3.65409H12.2786V6.1764H10.597C10.1346 6.1764 9.75627 6.55474 9.75627 7.01716V8.6987H12.2786V11.221H9.75627V17.0643C14.0021 16.644 17.3232 13.0623 17.3232 8.6987Z"
            fill="#F5F1EB"
        />
    </svg>
);

export default Facebook;
