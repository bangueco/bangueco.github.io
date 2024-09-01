import { ReactNode } from "react";

export default function GridBackground({children}: {children: ReactNode}) {
  return (
    <div className="h-screen dark:bg-dark bg-light  dark:bg-grid-primary/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-dark bg-light [mask-image:radial-gradient(circle,transparent_20%,black_40%)]"></div>
      <div className="flex flex-col gap-9 justify-center items-center">
        {children}
      </div>
    </div>
  );
}
