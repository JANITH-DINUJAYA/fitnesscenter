import React, { useState } from "react";

function ContactForm() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");
  const [success,setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if(name === "" || email === "" || message === ""){
      alert("Please fill all fields");
      return;
    }

    setSuccess("Message sent successfully!");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />

      <textarea
        placeholder="Message"
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
      />

      <button type="submit">Send Message</button>

      {success && <p>{success}</p>}

    </form>
  );
}

export default ContactForm;