import { Button } from "components/Button";
import { Example } from "components/Example";
import Navbar from "components/Navbar";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Example />
      <main className="container min-h-screen grid pt-48 md:pt-0 md:place-items-center">
        
        <div className="md:text-center">
          <h1 className="text-5xl font-semibold ">
            Vendetta DAO
          </h1>
          <Button />
          <p className="text-2xl text-gray-600 md:max-w-2xl mx-auto mt-12 md:mt-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda,
            architecto, ducimus cumque temporibus optio quae dolore expedita
            itaque ut minima labore nisi veniam amet rerum quidem, quam dolorum
            vero nulla.
          </p>
        </div>
      </main>
    </>
  );
}
