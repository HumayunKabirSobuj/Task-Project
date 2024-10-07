import Navbar from "@/Components/Navbar";
import TimeSorting from "@/Components/TimeSorting";

export default function Home() {
  return (
    <div className="lg:px-10 px-5 mt-5">
      <Navbar></Navbar>
      <TimeSorting></TimeSorting>
    </div>
  );
}
