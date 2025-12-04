interface MenuBurgerProps {
  width?: number;
  height?: number;
  className?: string;
  accessibility?: string;
}

const MenuBurger: React.FC<MenuBurgerProps> = ({ width = 21, height = 14, className, accessibility = 'Burger Menu' }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="iconTitle"
  >
    <title id="iconTitle">{accessibility}</title>
    <g id="Menu / Menu_Duo_LG">
      <path
        id="Vector"
        d="M3 15H21M3 9H21"
        stroke="#000000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

export default MenuBurger;