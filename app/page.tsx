import Image from "next/image";
import CollapsibleComponent from "./(pages)/collapsible/page";
import CollapsibleContext from "./(pages)/collapsibleContext/page";

export default function Home() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-br from-blue-400 to-purple-800 flex-col">
      {/* <CollapsibleComponent /> */}

      <p className="text-white p-3 text-2xl font-thin"> Collapsible Component</p>
      <CollapsibleContext />
    </div>
  );
}
