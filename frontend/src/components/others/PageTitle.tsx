import type { PageTitleProps } from "../../interfaces/others";

const PageTitle = ({ title }: PageTitleProps) => {
  return <h1 className="text-2xl font-semibold mb-4">{title}</h1>;
};

export default PageTitle;
