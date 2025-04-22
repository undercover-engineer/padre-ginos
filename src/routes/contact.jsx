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
    <div className="w-4/5 mx-auto font-inter">
      <h2 className="font-jost font-bold text-3xl text-center mb-8">Contact</h2>
      {mutation.isSuccess ? (
        <h3>Submitted!</h3>
      ) : (
        <div className="flex justify-center">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXiEvd8Cjs6dv49EGIqPBbgnYR5M_NCt--ng&s"
              alt="Padre Gino's logo"
            />
          </div>
          <form className="flex flex-col w-1/2 lg:w-1/4 space-y-5 ml-10">
            <input
              name="name"
              placeholder="John Doe"
              className="border-2 border-[#D4D4D8] rounded-lg h-11 pl-3 focus:bg-[#fff1f1] focus:border-0 focus:outline-none focus:ring-0"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="border-2 border-[#D4D4D8] rounded-lg h-11 pl-3 focus:bg-[#fff1f1] focus:border-0 focus:outline-none focus:ring-0"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border-2 border-[#D4D4D8] rounded-lg pl-3 pt-2 h-28 focus:bg-[#fff1f1] focus:border-0 focus:outline-none focus:ring-0"
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
