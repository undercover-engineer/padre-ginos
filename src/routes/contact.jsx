import { createFileRoute } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";
import postContact from "../api/postContact";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  const mutation = useMutation({
    mutationFn: function (e) {
      // The function call below is used to stop default behavior of an event. For example when a form is submitted the page is reloaded
      e.preventDefault();
      const formData = new FormData(e.target);
      return postContact(
        formData.get("name"),
        formData.get("email"),
        formData.get("message"),
      );
    },
  });
  return (
    <div className="lg:w-3/5 2xl:w-5/12 w-full mx-auto font-inter border-2 border-primary rounded-xl py-14">
      <div className="mb-8 pl-16 max-sm:w-5/6">
        <h2 className="font-jost font-bold text-3xl">
          Let's Chat, Reach Out to Us
        </h2>
        <p className="font-jost text-base md:w-3/4 md:text-lg mt-2">
          Have questions or feedback. We're here to help. Send us a message and
          we will respond within 24hrs
        </p>
      </div>
      {mutation.isSuccess ? (
        <div className="flex gap-2 items-center">
          <h3 className="text-3xl font-jost font-semibold pl-16">Submitted</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
          >
            <path
              fill="#5cb85c"
              d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z"
            />
          </svg>
        </div>
      ) : (
        <div className="flex md:flex-row flex-col items-center md:justify-center">
          <div>
            <img src="/assets/slice1.png" alt="Slice of pizza" />
          </div>
          <form
            onSubmit={mutation.mutate}
            className="flex flex-col md:w-1/2 w-4/5 space-y-5 md:ml-10"
          >
            <input
              name="name"
              placeholder="Name"
              className="rounded-lg h-11 pl-3 bg-[#fff1f1] border-0 focus:bg-[#ff6363] focus:outline-none focus:ring-0"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="rounded-lg h-11 pl-3 bg-[#fff1f1] border-0 focus:bg-[#ff6363] focus:outline-none focus:ring-0"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="rounded-lg pl-3 pt-2 h-28 bg-[#fff1f1] border-0 focus:bg-[#ff6363] focus:outline-none focus:ring-0 "
            ></textarea>
            <button
              type="submit"
              className="rounded-lg bg-primary text-white w-28 py-1 text-lg font-light"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
