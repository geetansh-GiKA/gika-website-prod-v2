import { useState, type FC } from "react";
import { ContactField } from "./ContactField";
import { CompanySizeSelect } from "./CompanySizeSelect";

export const ContactForm: FC = () => {
  const [companySize, setCompanySize] = useState("");

  return (
    <div className="px-8 md:px-12 py-16">
      <form
        className="flex flex-col gap-8"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid grid-cols-2 gap-6">
          <ContactField id="first-name" label="First name" placeholder="Maya" />
          <ContactField
            id="last-name"
            label="Last name"
            placeholder="Reinhardt"
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <ContactField
            id="email"
            label="Email"
            type="email"
            placeholder="maya@northwind.com"
          />
          <ContactField id="company" label="Company" placeholder="Northwind" />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <ContactField
            id="role"
            label="Role"
            placeholder="Director, Data Engineering"
          />
          <CompanySizeSelect value={companySize} onChange={setCompanySize} />
        </div>

        <div>
          <p className="text-[10px] font-mono tracking-[0.18em] uppercase text-ink-4 mb-3">
            What is your query?
          </p>
          <textarea
            rows={3}
            placeholder="Tell us about your use case, data sources, or anything you'd like us to know..."
            className="w-full bg-transparent border-b border-hairline text-sm text-ink placeholder:text-ink-4 outline-none focus:border-ink transition-colors resize-none py-2"
          />
        </div>

        <button
          type="submit"
          className="request-access-btn self-start mt-2 w-full justify-center"
        >
          <span>Submit request</span>
        </button>
      </form>
    </div>
  );
};
