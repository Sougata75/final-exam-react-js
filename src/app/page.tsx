
import Cart from "@/components/Cart";
import Header from "@/components/Header";
import Products from "@/components/Products";


export default function Home() {
  return (
   <div className="w-full h-screen">
    <Header/>
    <div className="w-full flex flex-wrap">
      <div className="w-[70%]"><Products/></div>
      <div className="w-[29%]"><Cart/></div>
    </div>
   </div>
  );
}
