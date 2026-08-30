import React, { useState } from "react";
import WorldMap from "./ui/world-map";
import { motion } from "framer-motion";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import axios from "axios";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    projectName: "Portfolio",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !formData?.name ||
      !formData?.phoneNo ||
      !formData?.email ||
      !formData?.message
    ) {
      setRes("INVALID");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post("/api/contact", formData);
      setRes("SUCCESS");
    } catch (error) {
      setRes("ERROR");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="pt-20 px-10" id="contact-us">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="">
            <div>
              <div className="">
                <div className="max-w-7xl mx-auto text-center">
                  <p className="font-bold text-3xl md:text-4xl dark:text-white text-black">
                    Contact{" "}
                    <span className="text-sky-500">
                      {"DuooTech".split("").map((word, idx) => (
                        <motion.span
                          key={idx}
                          className="inline-block"
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: idx * 0.04 }}
                        >
                          {word}
                        </motion.span>
                      ))}
                    </span>
                  </p>
                  <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
                    DuooTech helps businesses build custom software, SaaS
                    platforms, AI-powered automation, and reliable digital
                    infrastructure. Get in touch with us, and let’s turn your
                    ideas into powerful digital solutions.
                  </p>
                </div>
                <WorldMap
                  dots={[
                    {
                      start: {
                        lat: 64.2008,
                        lng: -149.4937,
                      }, // Alaska (Fairbanks)
                      end: {
                        lat: 34.0522,
                        lng: -118.2437,
                      }, // Los Angeles
                    },
                    {
                      start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                      end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                    },
                    {
                      start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                      end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
                    },
                    {
                      start: { lat: 51.5074, lng: -0.1278 }, // London
                      end: { lat: 28.6139, lng: 77.209 }, // New Delhi
                    },
                    {
                      start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                      end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
                    },
                    {
                      start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                      end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
                    },
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="max-w-lg lg:bg-white/5 lg:py-10 rounded-2xl lg:px-10">
              <h2 className="text-3xl text-center font-bold text-neutral-800 dark:text-neutral-200">
                Welcome to DuooTech
              </h2>
              <p className="mt-2 text-lg text-center  text-white/50">
                Send your query to us and we will contact you as soon as
                possible
              </p>

              {res === "ERROR" ? (
                <>
                  <div className="mt-5 text-lg font-medium font-sans tracking-normal px-5 py-3 bg-red-500/20 text-red-500 rounded-lg">
                    Sorry, something went wrong from our side. Please try again
                    some time.
                  </div>
                </>
              ) : res === "SUCCESS" ? (
                <div className="mt-5 text-lg font-medium font-sans tracking-normal px-5 py-3 bg-green-500/20 text-green-500 rounded-lg">
                  Thank you for contacting us. We will contact you as soon as
                  possible.
                </div>
              ) : res === "INVALID" ? (
                <div className="mt-5 text-lg font-medium font-sans tracking-normal px-5 py-3 bg-red-500/20 text-red-500 rounded-lg">
                  All fields are required
                </div>
              ) : (
                ""
              )}

              <form className="my-8" onSubmit={handleSubmit}>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="fullname">Full name</Label>
                  <Input
                    id="fullname"
                    placeholder="Manoj Bajpeyi"
                    type="text"
                    onChange={(val) =>
                      setFormData((prev) => ({
                        ...prev,
                        name: val?.target?.value,
                      }))
                    }
                  />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    placeholder="projectmayhem@fc.com"
                    type="email"
                    onChange={(val) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: val?.target?.value,
                      }))
                    }
                  />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="email">Phone Number</Label>
                  <Input
                    id="text"
                    placeholder="1234567890"
                    type="text"
                    onChange={(val) =>
                      setFormData((prev) => ({
                        ...prev,
                        phoneNo: val?.target?.value,
                      }))
                    }
                  />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="message">Message</Label>
                  <Input
                    id="message"
                    placeholder="Write Your Message..."
                    type="text"
                    onChange={(val) =>
                      setFormData((prev) => ({
                        ...prev,
                        message: val?.target?.value,
                      }))
                    }
                  />
                </LabelInputContainer>

                {loading ? (
                  <button
                    className="group/btn relative block h-10 w-full rounded-md bg-linear-to-br from-teal-500 to-sky-600 text-black font-semibold shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] cursor-pointer text-lg"
                    type="submit"
                    disabled
                  >
                    Please Wait...
                    <BottomGradient />
                  </button>
                ) : (
                  <button
                    className="group/btn relative block h-10 w-full rounded-md bg-linear-to-br from-teal-500 to-sky-600 text-black font-semibold shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] cursor-pointer text-lg hover:bg-lime-600"
                    type="submit"
                  >
                    Send Message &rarr;
                    <BottomGradient />
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

export default ContactUs;
