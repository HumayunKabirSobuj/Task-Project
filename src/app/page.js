import Cards from "@/Components/Cards";
import Navbar from "@/Components/Navbar";
import Table from "@/Components/Table";
import TimeSorting from "@/Components/TimeSorting";

export default function Home() {
  return (
    <div className="lg:px-10 px-5 mt-5">
      <Navbar></Navbar>
      <Cards></Cards>
      <TimeSorting></TimeSorting>
    </div>
  );
}
