import AboutUs from "../../components/about-us/AboutUs";
import CategoriesMenu from "../../components/categories-menu/categories-menu";

export default function Home() {
  return (
    <div>
      <CategoriesMenu />;
      <AboutUs />
    </div>
  );
}
