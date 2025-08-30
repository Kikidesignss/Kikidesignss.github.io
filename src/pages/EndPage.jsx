import React, { useRef, useState } from 'react';
import Confetti from '../components/Confetti';
import emailjs from "emailjs-com";

export default function EndPage() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    linkedin: "",
    feedback: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const SERVICE_ID = "service_dje9602";
    const TEMPLATE_ID = "template_iegsx4e";
    const PUBLIC_KEY = "4-QCEfOigpcauX-dN";

    // sendForm takes the actual <form> ref, so it picks up inputs automatically
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        alert("Thank you for your feedback!");
        setFormData({ name: "", linkedin: "", feedback: "" }); // clear inputs
      })
      .catch((err) => {
        console.error("Email sending failed:", err);
        alert("Oops! Something went wrong. Please try again later.");
      });
  };

  const iconStyle = {
    width: 50,
    height: 50,
    borderRadius: "50%",
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    transition: "transform 0.2s",
  };

  return (
    <div style={{
      padding: "2rem",
      textAlign: "center",
      fontFamily: "'Comic Sans MS', cursive, sans-serif",
      color: 'black',
      backgroundImage: "url('/end.jpg')", // 🔹 put your image in /public
      backgroundSize: "cover", // make it cover the whole viewport
      backgroundPosition: "center", // keep image centered
      backgroundRepeat: "no-repeat", // pastel pink
      minHeight: "100vh",
      fontWeight: 'bold'
    }}>
      <Confetti />

      <h1>You have reached the end!</h1>
      <p>You won more insight about me 😄 Click on these icons to learn more:</p>

      <div style={{ display: "flex", justifyContent: "center", gap: "2rem", margin: "2rem 0" }}>
        <a href="https://www.linkedin.com/in/kiananunez/" target="_blank" rel="noopener noreferrer" style={iconStyle}>
          <img src="/LinkedIn_icon.png" alt="LinkedIn" style={{ width: "50%", height: "50%" }} />
        </a>
        <a href="https://github.com/Kikidesignss" target="_blank" rel="noopener noreferrer" style={iconStyle}>
          <img src="/github.png" alt="GitHub" style={{ width: "50%", height: "50%" }} />
        </a>
      </div>

      <h2>Share your thoughts</h2>
      <form
        ref={form}
        onSubmit={handleSubmit}
        style={{
          maxWidth: 500,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ padding: "0.5rem", fontSize: 16 }}
        />
        <input
          type="text"
          name="linkedin"
          placeholder="Your LinkedIn (optional)"
          value={formData.linkedin}
          onChange={handleChange}
          style={{ padding: "0.5rem", fontSize: 16 }}
        />
        <textarea
          name="feedback"
          placeholder="What did you think of my portfolio? Suggestions?"
          value={formData.feedback}
          onChange={handleChange}
          required
          rows={5}
          style={{ padding: "0.5rem", fontSize: 16 }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            fontSize: 16,
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
