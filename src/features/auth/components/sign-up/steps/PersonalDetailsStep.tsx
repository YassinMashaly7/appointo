import { HeroInput } from "@/components/ui/heroui/HeroInput";
import { useFormContext } from "react-hook-form";

export default function PersonalDetailsStep() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  console.log(errors);

  return (
    <div className="flex flex-col gap-4">
      <HeroInput
        label="First Name"
        placeholder="Enter your first name"
        {...register("firstName")}
        isInvalid={!!errors.firstName}
        errorMessage={errors.firstName?.message}
      />
      <HeroInput
        label="Last Name"
        placeholder="Enter your last name"
        {...register("lastName")}
        isInvalid={!!errors.lastName}
        errorMessage={errors.lastName?.message}
      />
    </div>
  );
}
