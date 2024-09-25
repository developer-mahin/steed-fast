import { Link } from "react-router-dom";

type TProps = {
  item: {
    title: string;
    link: string;
  };
};

const NavItem: React.FC<TProps> = ({ item }) => {
  return (
    <li
      style={{
        marginLeft: "0px",
      }}
      className="xl:border-0 border-b px-2.5"
    >
      <Link
        to={item.link}
        className="xl:text-black text-white text-lg hover:text-yellow-500 transition"
      >
        {item.title}
      </Link>
    </li>
  );
};

export default NavItem;
