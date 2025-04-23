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
        <p className="font-jost text-base w-3/4 md:text-lg mt-2">
          Have questions or feedback. We're here to help. Send us a message and
          we will respond within 24hrs
        </p>
      </div>

      {mutation.isSuccess ? (
        <h3>Submitted!</h3>
      ) : (
        <div className="flex md:flex-row flex-col items-center md:justify-center">
          <div>
            <img src="/src/assets/images/slice1.png" alt="Slice of pizza" />
          </div>
          <form className="flex flex-col md:w-1/2 w-4/5 space-y-5 md:ml-10">
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
              className="border-2 rounded-xl bg-primary text-white w-28 py-1 text-lg font-light"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
