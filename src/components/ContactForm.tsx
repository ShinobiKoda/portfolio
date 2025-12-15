import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "../schema/contactSchema";
import { ClipLoader } from "react-spinners";
import { useState } from "react";
import { motion } from "./animations/motion";
import {
  sectionContainerVariants,
  listStaggerVariants,
  heroItemVariants,
  buttonItemVariants,
} from "./animations/motion";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (data: ContactFormData) => {
    console.log("Contact form submitted:", data);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      reset();
    }, 3000);
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="w-full space-y-4"
      variants={sectionContainerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        variants={listStaggerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="flex flex-col gap-1"
          variants={heroItemVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          <input
            type="text"
            id="name"
            placeholder="Name"
            aria-invalid={!!errors.name}
            className="p-2 font-normal text-base text-(--text-gray) border border-(--text-gray) outline-none"
            {...register("name")}
          />
          {errors.name?.message && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </motion.div>
        <motion.div
          className="flex flex-col gap-1"
          variants={heroItemVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          <input
            type="email"
            id="email"
            placeholder="Email"
            aria-invalid={!!errors.email}
            className="p-2 font-normal text-base text-(--text-gray) border border-(--text-gray) outline-none"
            {...register("email")}
          />
          {errors.email?.message && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-col gap-1"
        variants={heroItemVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <input
          type="text"
          id="title"
          placeholder="Title"
          aria-invalid={!!errors.title}
          className="p-2 font-normal text-base text-(--text-gray) border border-(--text-gray) outline-none"
          {...register("title")}
        />
        {errors.title?.message && (
          <span className="text-red-500 text-sm">{errors.title.message}</span>
        )}
      </motion.div>

      <motion.div
        className="flex flex-col gap-1"
        variants={heroItemVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <textarea
          id="message"
          placeholder="Message"
          aria-invalid={!!errors.message}
          className="p-2 font-normal text-base text-(--text-gray) border border-(--text-gray) outline-none"
          cols={5}
          rows={5}
          {...register("message")}
        />
        {errors.message?.message && (
          <span className="text-red-500 text-sm">{errors.message.message}</span>
        )}
      </motion.div>

      <motion.button
        type="submit"
        disabled={loading}
        className="px-4 py-2 border border-(--text-primary) text-white font-normal text-base disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
        variants={buttonItemVariants}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.96 }}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        {loading ? (
          <p className="flex items-center gap-1">
            <ClipLoader color="white" size={16} />
            <span>Sending</span>
          </p>
        ) : (
          "Send"
        )}
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;
