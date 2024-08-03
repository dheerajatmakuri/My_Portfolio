import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <main className={`max-w-4xl w-full mx-auto py-20 px-4 md:px-10 ${className}`}>
      {children}
    </main>
  );
};
