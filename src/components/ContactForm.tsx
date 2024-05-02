

const ContactForm = () => {
  return (
    <form className="w-full flex flex-col gap-10">
      <div className="flex flex-col md:flex-row  items-center gap-10">
        <Input label="First Name" type="text" name="first_name" />
        <Input label="First Name" type="text" name="first_name" />
      </div>
      <div className="flex flex-col md:flex-row  items-center gap-10">

        <Input label="Email" type="email" name="email" />
        <Input label="Phone Number" type="tel" name="phone" />
      </div>
      <label className="form-control w-full ">
      <div className="label">
        <span className="label-text text-grey-90">Your Message</span>
      </div>
      
  <textarea
        className="input placeholder-grey-40 input-bordered placeholder:card-title-text input-ghost border-t-0 border-x-0 w-full "
  
  placeholder="Message"></textarea>
     
    </label>
    <button type="submit" className="flex w-fit items-center gap-5 text-title text-white uppercase">
    Send Message <span
  className="btn hover:!bg-purple-60 px-7 md:px-10 rounded-3xl item !bg-purple-55">
  <svg
    width="18"
    height="18"
    viewBox="0 0 22 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.3125 0.187501L20.375 0.1875C20.6236 0.1875 20.8621 0.286272 21.0379 0.462087C21.2137 0.637903 21.3125 0.87636 21.3125 1.125V15.1875C21.3125 15.7053 20.8928 16.125 20.375 16.125C19.8572 16.125 19.4375 15.7053 19.4375 15.1875V3.38833L2.28791 20.5379C1.9218 20.904 1.3282 20.904 0.962087 20.5379C0.595971 20.1718 0.595971 19.5782 0.962087 19.2121L18.1117 2.0625L6.3125 2.0625C5.79473 2.0625 5.375 1.64277 5.375 1.125C5.375 0.607234 5.79473 0.187501 6.3125 0.187501Z"
      fill="white"></path>
  </svg>
</span>

    </button>

    </form>
  );
};

export default ContactForm;

const Input = ({ label, type, name } :{label: string, type: string, name: string}) => {
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text text-grey-90">{label}</span>
      </div>
      <input
        type={type}
        name={name}
        required
        pattern={type === "tel" ? "[0-9]{3}-[0-9]{2}-[0-9]{3}" : undefined}
        placeholder={label}
        className="input placeholder-grey-40 input-bordered placeholder:card-title-text input-ghost border-t-0 border-x-0 w-full "
      />
    </label>
  );
};
