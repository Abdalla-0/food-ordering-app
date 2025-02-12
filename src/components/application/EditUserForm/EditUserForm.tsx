"use client";
import Checkbox from "@/components/common/FormFields/Checkbox";
import FormFields from "@/components/common/FormFields/FormFields";
import { Button } from "@/components/ui/button";
import Loader from "@/components/ui/loader";
import { InputTypes, Routes } from "@/constants/enums";
import useFormFields from "@/hooks/useFormFields";
import { IFormField } from "@/types/app";
import { Translations } from "@/types/translations";
import { ValidationErrors } from "@/validations/auth";
import { UserRole } from "@prisma/client";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useActionState, useEffect, useState } from "react";
import { updateProfile } from "./_actions/profile";
import UploadImage from "./UploadImage";
import { toast } from "@/hooks/use-toast";

const EditUserForm = ({
  user,
  translations,
}: {
  user: Session["user"];
  translations: Translations;
}) => {
  const session = useSession();

  const formData = new FormData();

  Object.entries(user).forEach(([key, value]) => {
    if (value !== null && value !== undefined && key !== "image") {
      formData.append(key, value.toString());
    }
  });

  const initialState: {
    message?: string;
    error?: ValidationErrors;
    status?: number | null;
    formData?: FormData | null;
  } = {
    message: "",
    error: {},
    status: null,
    formData,
  };

  const [selectedImage, setSelectedImage] = useState(user.image ?? "");

  const [isAdmin, setIsAdmin] = useState(user.role === UserRole.ADMIN);

  const [state, action, pending] = useActionState(
    updateProfile.bind(null, isAdmin),
    initialState
  );

  const { getFormFields } = useFormFields({
    slug: Routes.PROFILE,
    translations,
  });

  useEffect(() => {
    if (state.message && state.status && !pending) {
      toast({
        title: state.message,
        className: state.status === 200 ? "text-green-400" : "text-destructive",
      });
    }
  }, [pending, state.message, state.status]);

  useEffect(() => {
    setSelectedImage(user.image as string);
  }, [user.image]);
  return (
    <form action={action} className="flex flex-col md:flex-row gap-10">
      <div className="group relative w-[200px] h-[200px] overflow-hidden rounded-full mx-auto">
        {selectedImage && (
          <Image
            src={selectedImage}
            alt={user.name}
            width={200}
            height={200}
            className="rounded-full object-cover"
          />
        )}
        <div
          className={`${
            selectedImage
              ? "group-hover:opacity-[1] opacity-0  transition-opacity duration-200"
              : ""
          } absolute top-0 left-0 w-full h-full bg-gray-50/40`}
        >
          <UploadImage setSelectedImage={setSelectedImage} />
        </div>
      </div>
      <div className="flex-1">
        {getFormFields().map((field: IFormField) => {
          const fieldValue =
            state?.formData?.get(field.name) ?? formData.get(field.name);
          return (
            <div key={field.name} className="mb-3">
              <FormFields
                {...field}
                defaultValue={fieldValue as string}
                error={state?.error}
                readOnly={field.type === InputTypes.EMAIL}
              />
            </div>
          );
        })}
        {session.data?.user.role === UserRole.ADMIN && (
          <div className="flex items-center gap-2 my-4">
            <Checkbox
              name="admin"
              checked={isAdmin}
              onClick={() => setIsAdmin(!isAdmin)}
              label="Admin"
            />
          </div>
        )}
        <Button type="submit" className="w-full">
          {pending ? <Loader /> : translations.save}
        </Button>
      </div>
    </form>
  );
};

export default EditUserForm;
