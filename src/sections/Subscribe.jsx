import Button from "../components/Button.jsx";

const Subscribe = () => {
  return (
    <section id="contact-us" className="max-container flex justify-between items-center max-lg:flex-col gap-10">
      <h3 className="text-4xl font-palanquin leading-[68px] font-bold lg:max-w-md">
        Sign Up from
        <span className="text-coral-red"> Updates</span> & Newsletter
      </h3>
      <div className="w-full lg:max-w-[40%] flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscribe@niko.com" className="input"/>
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button
            label="Sign up"
            fullWidth
          />
        </div>
      </div>
    </section>
  )
}

export default Subscribe