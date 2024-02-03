type IPaginationHeaderProps = {
  title: string;
  description: string;
};

const PaginationHeader = (props: IPaginationHeaderProps) => (
  <header className="text-center">
    <h1 className="text-3xl font-bold">{props.title}</h1>

    <div className="mt-3 text-gray-200">{props.description}</div>
  </header>
);

export { PaginationHeader };
