import { useForm, SubmitHandler, FieldValues, Path } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodTypeAny } from "zod";
import { useState } from "react";

type GenericFormProps<T extends FieldValues> = {
    schema: ZodTypeAny;
    onSubmit: SubmitHandler<T>;
    fields: {
        name: Path<T>;
        label: string;
        type?: "text" | "password" | "email" | "select" | "date";
        options?: { label: string; value: string }[];
    }[];
    formId?: string;
};

export function GenericForm<T extends FieldValues>({
    schema,
    onSubmit,
    fields,
    formId= "generic-form",
}: GenericFormProps<T>) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<T>({
        resolver: zodResolver(schema),
    });

    return (
        <form id={formId} onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-0.5">
        {fields.map(({ name, label, type = "text", options }) => (
            <div key={String(name)} className="flex flex-col gap-0.5">
                {label}
            {type === "select" ? (
                <select
                {...register(name)}
                className="border border-gray-200 focus:border-blue-600 outline-none p-2 rounded-4xl h-10 w-50"
                >
                <option value=""></option>
                {options?.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                    {opt.label}
                    </option>
                ))}
                </select>
            ) : (
                <div className="flex flex-col gap-0.5">
                    <input
                        {...register(name)}
                        type={type}
                        className="border border-gray-200 focus:border-blue-600 outline-none p-2 rounded-4xl h-10 w-50"
                    />
                </div>
            )}
            <p className="text-red-500 text-xs h-4 mt-1">
                {(errors[name] as any)?.message || "\u00A0"}
            </p>
            </div>
        ))}
        </form>
    );
}
