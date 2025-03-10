import { useState, useEffect } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("🔄 Submitted state changed:", submitted);
  }, [submitted]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("🚀 Sending Data:", formData);

      await fetch("https://kadagamventures.com/api/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.error("❌ Server Error:", error);
    }

    setSubmitted(true);
    setLoading(false);
  };

  const handleClose = () => {
    setSubmitted(false);
    setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="h-[calc(100vh-80px)] flex items-center justify-center mt-20 sm:mt-36 px-4 pt-10">
      <div className="w-full max-w-md bg-white p-6 sm:p-10 rounded-xl shadow-md border border-gray-300">
        {submitted ? (
          <div className="py-10 text-center">
            <h2 className="text-2xl font-semibold text-gray-900">Thank You!</h2>
            <p className="text-gray-700 mt-3">Thank you for reaching out!</p>
            <button
              onClick={handleClose}
              className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded transition"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">
              Say Hello!
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {Object.keys(formData).map((field) => (
                <div key={field}>
                  <label className="text-gray-700 font-medium">
                    {field.charAt(0).toUpperCase() + field.slice(1).replace("Name", " Name")} *
                  </label>
                  {field === "message" ? (
                    <textarea
                      rows="3"
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      placeholder={`Write your ${field}...`}
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
                    ></textarea>
                  ) : (
                    <input
                      type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
                      required
                    />
                  )}
                </div>
              ))}

              <div className="text-center">
                <button
                  type="submit"
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded transition"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "SEND MESSAGE"}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
