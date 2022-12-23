import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const PUBLIC_KEY = "8NfZi2ZC2NBqlx2ye";
const SERVICE_ID = "service_ikbsl2d";
const TEMPLATE_ID = "template_ktje36b";

export const emailValidator = (email: string): string => {
  const errorMessage = "Invalid email";
  if (!email) return errorMessage;

  const emailParts = email.split("@");

  if (emailParts.length !== 2) return errorMessage;

  const account = emailParts[0];
  const address = emailParts[1];

  if (account.length > 64) return errorMessage;
  else if (address.length > 255) return errorMessage;

  const domainParts = address.split(".");
  if (
    domainParts.some(function (part) {
      return part.length > 63;
    })
  )
    return errorMessage;

  const tester =
    /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
  if (!tester.test(email)) return errorMessage;

  return "";
};

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [emailError, setEmailError] = useState("");
  const [triedSubmit, setTriedSubmit] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  const onSubmit = async () => {
    setTriedSubmit(true);
    const emailError = emailValidator(email);
    setEmailError(emailError);

    if (emailError) {
      return;
    }

    const templateParams = {
      from_name: `${firstName} ${lastName}`,
      from_email: email,
      message
    };

    if (sending) return;

    setSending(true);
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
      toast.success("Email sent successfully");
    } catch (e) {
      console.error(e);
      toast.error("Something went wrong, please try again");
    } finally {
      setSending(false);
    }

    console.debug("Sending email with params", templateParams);

    setTriedSubmit(false);
  };

  const showError = emailError && triedSubmit;
  return (
    <div className="overflow-hidden py-16 px-4 sm:px-2 lg:px-8 lg:py-12">
      <div className="relative mx-auto max-w-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
            Contact us
          </h2>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
            <div>
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-300">
                First name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md
                   border-gray-300 py-3 px-4 shadow-sm bg-gray-200
                    focus:border-accent-500 focus:ring-accent-500"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-300">
                Last name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm
                   focus:border-accent-500 focus:ring-accent-500
                   bg-gray-200"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className={`block w-full bg-gray-200 rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-accent-500 focus:ring-accent-500
                    ${showError && triedSubmit ? "border-red-500 bg-red-200" : ""}
                    `}
                  value={email}
                  onChange={(e) => {
                    setEmailError(emailValidator(e.target.value));
                    setEmail(e.target.value);
                  }}
                />
                {showError && (
                  <p className="mt-2 text-sm text-red-600" id="email-error">
                    {emailError}
                  </p>
                )}
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full bg-gray-200 rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-accent-500 focus:ring-accent-500"
                  defaultValue={""}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="inline-flex
                w-full
                items-center
                justify-center
                rounded-md
                border
                border-transparent
                bg-accent-700
                px-6
                py-3
                text-base
                font-medium
                text-white
                shadow-sm
                hover:bg-accent-800
                focus:outline-none
                focus:ring-2
                focus:ring-accent-500
                focus:ring-offset-2"
                onClick={onSubmit}
                disabled={sending}
              >
                {sending ? "Sending..." : "Let's talk"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
