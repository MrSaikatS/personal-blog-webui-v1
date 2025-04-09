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
import { categoryFormSchema } from "@/lib/schemas";
import { CategoryFormDataType } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const CategoryForm = () => {
  const rhForm = useForm<CategoryFormDataType>({
    resolver: zodResolver(categoryFormSchema),

    defaultValues: {
      name: "",
    },

    mode: "all",
  });

  const categoryAddFnc = async (data: CategoryFormDataType) => {
    const slug = data.name.toLowerCase().replaceAll(" ", "-");

    const cfData = {
      name: data.name,
      slug: slug,
    };

    console.log(cfData);

    try {
      //
    } catch (error) {
      //
    }
  };

  return (
    <>
      <div className="">
        <Form {...rhForm}>
          <form
            onSubmit={rhForm.handleSubmit(categoryAddFnc)}
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
              >
                Add
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default CategoryForm;
