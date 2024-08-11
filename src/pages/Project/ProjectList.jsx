/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  CaretDownIcon,
  MagnifyingGlassIcon,
  MixerHorizontalIcon,
} from "@radix-ui/react-icons";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects, searchProjects } from "@/redux/Project/Project.Action";
import { useLocation, useNavigate } from "react-router-dom";
import { tags } from "./filterData";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import FilterSheet from "./FilterSheet";

const ProjectList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category");
  const tag = searchParams.get("tag");
  const [keyword, setKeyword] = useState("");

  const { project,auth } = useSelector((store) => store);

  useEffect(() => {
    dispatch(fetchProjects({ category, tag }));
  }, [category, tag,auth.jwt]);

  const handleFilterChange = (section, value) => {
    console.log(value, section);

    if (value === "all") {
      searchParams.delete(section);
    } else {
      searchParams.set(section, value);
    }
    const query = searchParams.toString();
    navigate({ search: query ? `?${query}` : "" });
  };
  const handleSearchChange = (e) => {
    setKeyword(e.target.value);
    if (e.target.value) {
      dispatch(searchProjects(e.target.value));
    }
  };
  return (
    <>
      <div className="relative px-5 lg:px-0 lg:flex gap-5 justify-center py-5">
        <section className="hidden lg:block">
          <Card className="p-5 sticky top-10">
            <div className="flex justify-between lg:w-[20rem]">
              <p className="text-xl tracking-wider">filters</p>
              <Button variant="ghost" size="icon">
                <MixerHorizontalIcon />
              </Button>
            </div>

            <CardContent className="mt-5 ">
              <ScrollArea className="space-y-7 h-[70vh]">
                <div>
                  <h1 className="pb-3 text-gray-400 border-b">Category</h1>
                  <div className="pt-5">
                    <RadioGroup
                      onValueChange={(value) =>
                        handleFilterChange("category", value)
                      }
                      className="space-y-3"
                      defaultValue={category || "all"}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="all" id="r1" />
                        <Label htmlFor="r1">all</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="fullstack" id="r1" />
                        <Label htmlFor="r1">full stack</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="frontend" id="r2" />
                        <Label htmlFor="r2">frontend</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="backend" id="r3" />
                        <Label htmlFor="r3">backend</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <div className="pt-9">
                  <h1 className="pb-3 text-gray-400 border-b">Tags</h1>

                  <RadioGroup
                    onValueChange={(value) => handleFilterChange("tag", value)}
                    className="space-y-3 pt-5"
                    defaultValue={tag || "all"}
                  >
                    {tags.map((item) => (
                      <div key={item} className="flex items-center space-x-2">
                        <RadioGroupItem value={item} id={`r-${item}`} />
                        <Label htmlFor={`r-${item}`}>{item}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </section>

        <section className="w-full lg:w-[48rem]">
          <div className="flex gap-2 items-center pb-5 justify-between">
            <div className="relative p-0 w-full">
              <Input
                className="w-[40%] rounded-fulls px-9"
                placeholder="search project..."
                onChange={handleSearchChange}
              />
              <MagnifyingGlassIcon className="absolute top-3 left-4" />
            </div>

            <Sheet className=" lg:hidden">
              <SheetTrigger>
                <Button className="" variant="ghost" size="icon">
                  <MixerHorizontalIcon />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <FilterSheet />
              </SheetContent>
            </Sheet>
          </div>
          <div>
            <div className="space-y-5 min-h-[74vh]">
              {keyword
                ? project.searchProjects.map((item) => (
                    <ProjectCard item={item} key={item.id} />
                  ))
                : project.projects.map((item) => (
                    <ProjectCard item={item} key={item.id} />
                  ))}
            </div>
            {project.projects.length > 0 ? (
              <div>
                {/* <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination> */}
              </div>
            ) : (
              <div className="flex items-center justify-center h-[80vh]">
                <h1>No projects...</h1>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectList;
