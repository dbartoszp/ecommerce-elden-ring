import { Button } from "../../Button/Button";
import { FormRow } from "../FormRow/FormRow";

export function RegisterForm() {
  const handleSubmit = () => {
    e.preventDefault();
  };

  return (
    <>
      <span className="ml-4 border-b border-b-dark-green pb-1 text-3xl font-semibold tracking-wide text-dark-green">
        ...OR CREATE AN ACCOUNT
      </span>
      <form className="px-4 py-9">
        <FormRow label="FIRST NAME">
          <input
            type="text"
            className="rounded-sm  px-6 py-3 text-dark-green shadow-md"
          />
        </FormRow>
        <FormRow label="LAST NAME">
          <input
            type="text"
            className="rounded-sm  px-6 py-3 text-dark-green shadow-md"
          />
        </FormRow>
        <FormRow label="EMAIL">
          <input
            type="email"
            className="rounded-sm  px-6 py-3 text-dark-green shadow-md"
          />
        </FormRow>
        <FormRow label="PASSWORD">
          <input
            type="password"
            className="rounded-sm  px-6 py-3 text-dark-green shadow-md"
          />
        </FormRow>
        <FormRow label="CONFIRM PASSWORD">
          <input
            type="password"
            className="rounded-sm  px-6 py-3 text-dark-green shadow-md"
          />
        </FormRow>
        <FormRow>
          <Button variant="primary" size="lg" onClick={handleSubmit}>
            REGISTER
          </Button>
        </FormRow>
      </form>
    </>
  );
}
