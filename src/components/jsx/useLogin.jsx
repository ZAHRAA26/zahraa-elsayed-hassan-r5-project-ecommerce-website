import { useForm } from "react-hook-form";

const COMMON_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "outlook.com",
];
const useLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    console.log(data);
  };

  const getClosestDomain = (inputDomain) => {
    const closestDomain = inputDomain.toLowerCase();
    return COMMON_DOMAINS.find(
      (domain) =>
        domain.includes(closestDomain) ||
        closestDomain.includes(domain.slice(0, 3))
    );
  };

  return { register, handleSubmit, errors, onSubmit, getClosestDomain };
};

export default useLogin;