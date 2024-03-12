import React, { useState } from "react";
import axios from "axios";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Envoyer la requête POST vers le serveur Flask avec les données
      const response = await axios.post("http://localhost:5000/send_email", { email, subject, message });
      console.log(response.data);
      setSent(true);
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'e-mail :", error);
    }
  };

  return (
    <div>
      {sent ? (
        <p>Email sent successfully!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit">Send Email</button>
        </form>
      )}
    </div>
  );
};

export default EmailForm;
