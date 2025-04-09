"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import editCategoryHook from "@/hooks/editCategoryHook";
import { categoryFormSchema } from "@/lib/schemas";
import { CategoryFormDataType, EditCategoryProps } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const CategoryEditForm = ({ info }: EditCategoryProps) => {
  const rhForm = useForm<CategoryFormDataType>({
    resolver: zodResolver(categoryFormSchema),

    defaultValues: {
      name: info.name,
    },

    mode: "all",
  });

  const categoryEditFnc = async (data: CategoryFormDataType) => {
    const slug = data.name.toLowerCase().replaceAll(" ", "-");

    const cfData = {
      id: info.id,
      name: data.name,
      slug: slug,
    };

    if (data.name === info.name) {
      console.log("Same");
    }

    if (data.name !== info.name) {
      const { success, message } = await editCategoryHook(cfData);

      if (!success) {
        console.log(message);
      }

      if (success) {
        console.log(message);
      }
    }
  };

  return (
    <>
      <Form {...rhForm}>
        <form
          onSubmit={rhForm.handleSubmit(categoryEditFnc)}
          className="space-y-8"
        >
          <FormField
            control={rhForm.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Category Name"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-center">
            <Button
              type="submit"
              className="cursor-pointer"
              disabled={
                rhForm.formState.isValid || rhForm.formState.isSubmitting
                  ? false
                  : true
              }
            >
              Update
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default CategoryEditForm;
