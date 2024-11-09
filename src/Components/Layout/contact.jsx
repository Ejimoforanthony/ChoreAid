import Gmail from '../../images/social-media-logo-1.png';
import Phone from '../../images/social-media-logo-2.png';

export default function ContactForm() {
  return (
    <div className="mt-10 w-full bg-[#DBF5FF] py-10">
      <h2 className="mb-7 text-center text-2xl font-extrabold text-[#002A42] sm:text-3xl md:text-4xl">
        Reach out to Us!!!
      </h2>

      <div className="flex flex-col gap-8 md:flex-row md:justify-between md:gap-16">
        {/* Contact Details Section */}
        <div className="flex-1 md:pl-6 gap-y-2  w-full flex-col gap-8 md:gap-10">
          <a
            href="tel:+2348034567890"
            className="flex items-center gap-4 text-[#002A42]" 
          >
            <div className="items-center justify-center rounded-lg bg-[#FCFCFC] p-3"> {/* Increased padding for larger icons */}
              <img src={Phone} alt="Phone icon" className="h-10 w-10" /> 
            </div>
            <span className="flex-grow text-xl font-normal">+234 764564535</span> 
          </a>
          <a
            href="mailto:choreaid@gmail.com"
            className="flex items-center gap-4 text-[#002A42]"
          >
            <div className="items-center justify-center rounded-lg bg-[#FCFCFC] p-3">
              <img src={Gmail} alt="Gmail icon" className="h-10 w-10" /> {/* Increased size */}
            </div>
            <span className="flex-grow text-base">choreaid@gmail.com</span>
          </a>
        </div>

        {/* Contact Form Section */}
        <form className="w-full flex-1">
          {/* Email Input */}
          <div className="mt-5 w-full">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email:"
              className="w-full rounded-[30px] border border-[#B0B0B0]  px-4 py-6 outline-0 focus:border-[#0046FF] focus:ring-2 focus:ring-[#0046FF] transition duration-200 bg-[#006299]"
            />
          </div>

          {/* Message Textarea */}
          <div className="mt-5 w-full">
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Message:"
              className="w-full rounded-[30px] border border-[#B0B0B0] bg-[#006299] px-4 py-6 outline-0 min-h-[175px] focus:border-[#0046FF] focus:ring-2 focus:ring-[#0046FF] transition duration-200"
            />
          </div>

          {/* Send Button */}
          <div className="mt-7">
            <button
              type="submit"
              className="ms-auto rounded-full border border-[#0046FF] bg-[#028DDB] text-white px-8 py-2 transition duration-200 hover:bg-[#0046FF] hover:text-white"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
