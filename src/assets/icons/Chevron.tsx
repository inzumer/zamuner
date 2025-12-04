interface ChevronProps {
  width?: number;
  height?: number;
  className?: string;
  accessibility?: string;
}

const Chevron: React.FC<ChevronProps> = ({ width = 24, height = 24, className, accessibility = 'Chevron' }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 32 32"
    fill="#A8A8A8"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="iconTitle"
  >
    <title id="iconTitle">{accessibility}</title>
    <path d="M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z" />
  </svg>
);

export default Chevron;