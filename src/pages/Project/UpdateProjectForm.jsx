import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { array, object, string } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import {
  createProject,
  fetchProjectById,
  updateProject,
} from "@/redux/Project/Project.Action";
import { Cross1Icon } from "@radix-ui/react-icons";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const formSchema = object({
  name: string().min(1),
  description: string().min(1),
  category: string().min(1),
  tags: array(string()),
});

const UpdateProjectForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { project } = useSelector((store) => store);
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    dispatch(fetchProjectById(id));
  }, [id]);

  useEffect(() => {
    // Set form default values once project data is fetched
    if (project.projectDetails) {
      form.reset({
        name: project.projectDetails.name,
        description: project.projectDetails.description,
        category: project.projectDetails.category,
        tags: project.projectDetails.tags,
      });
    }
  }, [project.projectDetails, form]);

  const handleTagsChange = (newValue) => {
    const currentTags = form.getValues("tags");

    const updatedTags = currentTags.includes(newValue)
      ? currentTags.filter((tag) => tag !== newValue)
      : [...currentTags, newValue];

    form.setValue("tags", updatedTags);
  };

  const onSubmit = (data) => {
    // dispatch(createProject(data));
    dispatch(updateProject({ updatedData: data, projectId: id }));
    console.log("update project", data);
    navigate("/");
  };

  return (
    <div className="min-h-[90vh] flex flex-col justify-center items-center px-5">
      {project.projectDetails ? (
        <div className="border w-full flex flex-col justify-center lg:h-[75vh] p-10 lg:w-[30vw]">
            <h1 className="text-center pb-9 text-lg font-semibold">Update Project</h1>
          <Form className="" {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} 
            className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        className="border w-full border-gray-700 py-5 px-5"
                        placeholder="project name..."
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        className="border w-full border-gray-700 py-5 px-5"
                        placeholder="project description"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select
                        //   defaultValue={project.projectDetails.category}
                        //   value={field.value}
                        onValueChange={(value) => {
                          field.onChange(value);
                        }}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fullstack">Full Stack</SelectItem>
                          <SelectItem value="frontend">Frontend</SelectItem>
                          <SelectItem value="backend">Backend</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={"tags"}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select
                        onValueChange={(value) => {
                          handleTagsChange(value);
                        }}
                        multiple
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Tags" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="react">React</SelectItem>
                          <SelectItem value="javascript">JavaScript</SelectItem>
                          <SelectItem value="html">HTML</SelectItem>
                          <SelectItem value="css">CSS</SelectItem>
                          <SelectItem value="frontend">Frontend</SelectItem>
                          <SelectItem value="backend">Backend</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <div className="flex gap-1 flex-wrap">
                      {field.value?.map((item) => (
                        <div
                          onClick={() => handleTagsChange(item)}
                          key={item}
                          className="cursor-pointer flex rounded-full items-center border gap-2 px-4 py-1"
                        >
                          <span className="text-sm">{item}</span>
                          <Cross1Icon className="h-3 w-3" />
                        </div>
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-slate-400 py-5">
                Update Project
              </Button>
            </form>
          </Form>
        </div>
      ) : (
        <p>Loading project data...</p>
      )}
    </div>
  );
};

export default UpdateProjectForm;
