import CarouselCards from "@/components/Home/CarouselCards";
import Footer from "@/components/Home/Footer";
import NavbarComponent from "@/components/Home/Navbar";
import PopularProducts from "@/components/Home/PopularProducts";
import UserComments from "@/components/Home/UserComments";

export default function Home() {
  return (
    <div className="flex flex-col">
      <NavbarComponent />
      <div className="flex flex-col items-center justify-center gap-8 p-10">
        <CarouselCards />
      </div>
      <PopularProducts />
      <UserComments />
      <Footer />
    </div>
  );
}
