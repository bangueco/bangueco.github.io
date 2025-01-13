import { Form } from "@nextui-org/form";
import { Button, Input, Textarea } from "@nextui-org/react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function Contact() {
  return (
    <article className="flex flex-col items-center justify-center p-3">
      <h1 className="text-light-primary dark:text-dark-primary text-3xl md:text-4xl lg:text-5xl font-bold">Ways to connect with me</h1>
      <p className="text-justify text-sm md:text-md p-3 max-sm:w-full sm:w-3/4 md:w-2/3 pb-10">
        Thank you for taking the time to visit my page. If you are interested in connecting with me, whether it&apos;s to discuss business opportunities, potential collaborations, or simply to share ideas and explore mutual interests, I&apos;d love to hear from you. I am always open to meaningful conversations that can lead to growth and new opportunities. However, to maintain a level of privacy and avoid spam, I have chosen not to provide my email address directly on this platform. Instead, you are more than welcome to reach out to me through the following platforms listed below or you can use the contact form below. I look forward to connecting and hearing from you soon!
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-evenly gap-3 w-full md:w-[60%]">
        <ul className="flex flex-col gap-3 flex-wrap p-3 pb-11">
          <li className="flex gap-2 items-center">
            <FaFacebook size={20} />
            <a
              className="text-light-primary dark:text-dark-primary"
              href="https://www.facebook.com/xxxjustentacion/"
              target="_blank"
              rel="noreferrer"
            >
              Connect on Facebook
            </a>
          </li>
          <li className="flex gap-2 items-center">
            <FaInstagram size={20} />
            <a
              className="text-light-primary dark:text-dark-primary"
              href="https://www.instagram.com/aybancaughtin4k/"
              target="_blank"
              rel="noreferrer"
            >
              Connect on Instagram
            </a>
          </li>
          <li className="flex gap-2 items-center">
            <FaLinkedin size={20} />
            <a
              className="text-light-primary dark:text-dark-primary"
              href="https://www.linkedin.com/in/justine-ivan-gueco-4a8a3a312/"
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn
            </a>
          </li>
          <li className="flex gap-2 items-center">
            <FaGithub size={20} />
            <a
              className="text-light-primary dark:text-dark-primary"
              href="https://www.github.com/bangueco"
              target="_blank"
              rel="noreferrer"
            >
              Connect on Github
            </a>
          </li>
        </ul>
        <Form method="post" className="flex-1" validationBehavior="native">
          <Input
            isRequired
            errorMessage="Please enter a valid name"
            label="Your Name"
            labelPlacement="outside"
            name="name"
            placeholder="Enter your name"
            type="text"
          />
          <Input
            isRequired
            errorMessage="Please enter a valid email"
            label="Your Email"
            labelPlacement="outside"
            name="email"
            placeholder="Enter your email"
            type="email"
          />
          <Input
            isRequired
            errorMessage="Please enter a valid subject"
            label="Subject"
            labelPlacement="outside"
            name="subject"
            placeholder="Enter subject"
            type="text"
          />
          <Textarea
            isRequired
            className="max-h-60"
            label="Your message"
            labelPlacement="outside"
            placeholder="Enter your message"
          />
          <Button type="submit" variant="bordered">
            Submit
          </Button>
        </Form>
      </div>
    </article>
  )
}