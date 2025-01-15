import React from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import AI from "@/assets/icons/ai.svg"
import { IconArrowUpRight } from "@tabler/icons-react";
const Hero = () => {
  return (
    <section className="mt-[100px]">
      <div className="container gap-y-[32px] ">
        <div className="flex flex-col items-center justify-center">
          <Badge className="justify-center mb-4">
            <AI className="w-5 h-5" />
            Radision - AI Automation Partner
          </Badge>
          <h1 className="text-center font-medium">
            Transforming workflows with AI powered automation
          </h1>
          <p className="w-[500px] text-center py-4">
            Experience the future of business with intelligent, scalable
            automation solutions tailored to your needs
          </p>
        </div>
        <div className="mt-6 flex justify-center gap-4">
          <Button className="bg-blue">
            <p className="text-base font-normal">Our Services</p>
            <IconArrowUpRight />
          </Button>
          <Button>See Plans</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
