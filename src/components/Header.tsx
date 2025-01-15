import { Button } from './ui/button';
import { IconArrowUpRight } from "@tabler/icons-react";

const Header = () => {
  return (
    <header className="py-4">
      <div className="container">
        <div className="flex justify-between items-center px-4 h-[58px] rounded-xl border border-white bg-black-navbar backdrop-blur-lg">
          <div className="text-white">logo</div>
          <div>
            <Button className="bg-blue">
              <p className="text-base font-normal">Get In Touch</p>
              <IconArrowUpRight />
            </Button>
            <Button>halooww</Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header