const Faq = () => {
  return (
    <div className="mt-[200px] lg:ms-[47px] md:ms-[47px] m-3">
      <div>
        <button className="border-[#343268] rounded-full btn bg-white">
          Faq
        </button>
        <h1 className="text-[36px] font-[600] text-[#020043] mt-5">
          Frequntly Asked Question
        </h1>
      </div>
      <div className="flex flex-col divide-y sm:px-8 lg:px-0 xl:px-0 dark:divide-gray-300 mt-2">
        <details>
          <summary className="py-2 outline-none cursor-pointer  text-[20px]">
            What are your office hours?
          </summary>
          <div className="px-4 pb-4">
            <p>
              Our office hours vary by location, but typically we are open
              Monday through Friday from 8:00 AM to 5:00 PM. Some locations may
              offer extended hours or weekend appointments. Please contact your
              nearest clinic for specific hours.
            </p>
          </div>
        </details>
        <details>
          <summary className="py-2 outline-none cursor-pointer  text-[20px]">
            How can I schedule an appointment?
          </summary>
          <div className="px-4 pb-4">
            <p>
              Scheduling an appointment can vary depending on the context and
              the system you're interacting with. Here are general steps you
              might follow to schedule an appointment in different scenarios
            </p>
          </div>
        </details>
        <details>
          <summary className="py-2 outline-none cursor-pointer  text-[20px]">
            Do you accept insurance?
          </summary>
          <div className="px-4 pb-4">
            <p>
              Yes, we accept most major insurance plans. For verification,
              please call (123) 456-7890
            </p>
          </div>
        </details>
        <details>
          <summary className="py-2 outline-none cursor-pointer  text-[20px]">
            What should I bring to my appointment?
          </summary>
          <div className="px-4 pb-4">
            <p>
              For your appointment, please bring: Insurance card Photo ID
              Medication list Payment method This ensures a smooth visit.
            </p>
          </div>
        </details>
        <details>
          <summary className="py-2 outline-none cursor-pointer  text-[20px]">
            Do you offer telemedicine appointments?
          </summary>
          <div className="px-4 pb-4">
            <p>
              No, I don't offer telemedicine appointments. I can provide
              information and answer questions you may have about telemedicine
              or related topics, though.
            </p>
          </div>
        </details>
      </div>
    </div>
  );
};

export default Faq;
