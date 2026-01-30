import Button from "./ui/Button";
import Reveal from "./ui/Reveal";

const Contact = () => {
  return (
    <section
      className="w-full py-20 sm:py-40 justify-center flex items-center z-20"
      id="contact"
    >
      <div className="flex flex-col items-center text-center">
        <Reveal>
          <h2>
            Contact{" "}
           <span className="bg-gradient-to-r from-purple to-[#FFD700] via-purple bg-clip-text text-transparent">
            me.</span>
          </h2>
        </Reveal>

        <a className="mt-10" href="https://wa.me/234812509988">
          <Button
            title="Let's connect"
            icon={<img src="assets/send.svg" />}
            position="right"
          />
        </a>
      </div>
    </section>
  );
};

export default Contact;
