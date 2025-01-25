"use client";
import FormFields from "@/components/common/FormFields/FormFields";
import { Button } from "@/components/ui/button";
import Loader from "@/components/ui/loader";
import { Pages, Routes } from "@/constants/enums";
import { toast } from "@/hooks/use-toast";
import useFormFields from "@/hooks/useFormFields";
import { signup } from "@/server/_actions/auth";
import { IFormField } from "@/types/app";
import { Translations } from "@/types/translations";
import { ValidationErrors } from "@/validation/auth";
import { useParams, useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
const Form = ({ translations }: { translations: Translations }) => {
  // states
  const initialState: {
    message?: string;
    error?: ValidationErrors;
    status?: number | null;
    formData?: FormData | null;
  } = {
    message: "",
    error: {},
    status: null,
    formData: null,
  };

  const [state, action, pending] = useActionState(signup, initialState);

  const { locale } = useParams();

  const router = useRouter();

  // functions
  const { getFormFields } = useFormFields({
    slug: Pages.Register,
    translations,
  });

  useEffect(() => {
    if (state.status && state.message) {
      toast({
        title: state.message,
        className: state.status === 201 ? "text-green-400" : "text-destructive",
      });
    }
    if (state.status === 201) {
      router.replace(`/${locale}/${Routes.AUTH}/${Pages.LOGIN}`);
    }
  }, [locale, router, state.message, state.status]);

  return (
    <form action={action}>
      {getFormFields().map((field: IFormField) => {
        const fieldValue = state.formData?.get(field.name) as string;
        return (
          <div key={field.name} className="mb-3">
            <FormFields
              {...field}
              defaultValue={fieldValue}
              error={state.error}
            />
          </div>
        );
      })}
      <Button type="submit" className="w-full" disabled={pending}>
        {pending ? <Loader /> : translations.auth.register.submit}
      </Button>
    </form>
  );
};

export default Form;
