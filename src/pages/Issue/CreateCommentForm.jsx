/* eslint-disable react/prop-types */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { AvatarFallback,Avatar } from "@/components/ui/avatar";
import { useDispatch, useSelector } from "react-redux";
import { createComment } from "@/redux/Comment/comment.action";

const formSchema = z.object({
  content: z.string().min(2, {
    message: "issue name must be at least 2 characters.",
  }),
});

export function CreateCommentForm({issueId}) {
  const {auth}=useSelector(store=>store);
  const dispatch = useDispatch();
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          content: "",
        },
      })
  const onSubmit = (data) => {
    console.log("comment data ", data);
    dispatch(createComment({content:data.content,issueId}))
    form.reset();
  };

  return (
    <Form {...form}>
    <form 
    onSubmit={form.handleSubmit(onSubmit)} 
    className="flex gap-2">
      <FormField
        control={form.control}
        name="content"
        render={({ field }) => (
          <FormItem>
            <div className="flex gap-2">
                <div>
                  <Avatar>
                    <AvatarFallback>{auth.user.fullName[0].toUpperCase()}</AvatarFallback>
                </Avatar>  
                </div>
                
                 <FormControl>
              <Input className="w-[20rem]" placeholder="add a comment..." {...field} />
            </FormControl>
            </div>
           
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit">save</Button>
    </form>
  </Form>
  );
}
