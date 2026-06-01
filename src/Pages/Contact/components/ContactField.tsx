import type { FC } from "react";

type FieldProps = {
  id: string;
  label: string;
  placeholder?: string;
  type?: string;
};

export const ContactField: FC<FieldProps> = ({
  id,
  label,
  placeholder,
  type = "text",
}) => (
  <div className="flex flex-col gap-1.5">
    <label
      className="text-[10px] font-mono tracking-[0.14em] uppercase text-ink-4"
      htmlFor={id}
    >
      {label}
    </label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className="w-full bg-transparent border-b border-hairline text-sm text-ink placeholder:text-ink-4 outline-none focus:border-ink transition-colors py-2"
    />
  </div>
);
