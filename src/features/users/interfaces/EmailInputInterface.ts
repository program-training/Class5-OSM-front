// With God's Help

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export interface EmailInputInterface {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  emailValidet: {
    required: string;
    pattern: {
      value: RegExp;
      message: string;
    };
  };
}
