import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
export default function Contact() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [state] = useForm("1");

  if (state.succeeded) {
    return <div>Thank you for signing up!</div>;
  }
  return (
    <form
      action="https://formspree.io/f/xbjwrnwr"
      className="Contact"
      method="post"
    >
      <h2>Contact me </h2>
      <div>
        <div className="container ContactForm">
          <div className="inputGroup">
            <div className="labelInput">
              <label>name</label>
              <input
                className="input"
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div className="labelInput">
              <label>email</label>
              <input
                className="input"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <button className="button" type="submit" value="send">
              Send
            </button>
          </div>
          <div className="inputGroup">
            <label>Mail Content</label>
            <textarea
              id="message"
              name="message"
              className="textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
        </div>{" "}
      </div>
    </form>
  );
}
