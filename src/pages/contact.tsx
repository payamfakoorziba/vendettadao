import ContactForm from "components/ContactForm";

export default function Contact() {
  
  return (
    <>
      <div className="relative min-h-screen">
        <img src="/learn_more_image.jpg" alt="learn more" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent "></div>
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <div className="relative bg-neutral-900/40 backdrop-blur-lg border border-neutral-800 rounded-lg ">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
