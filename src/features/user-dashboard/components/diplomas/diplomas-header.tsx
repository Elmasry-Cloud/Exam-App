import GoBack from "./go-back";

interface IDiplomasHeader {
  text?: string;
  hrefBack?: string;
  children?: React.ReactNode;
}

export default function DiplomasHeader({
  text,
  hrefBack,
  children,
}: IDiplomasHeader) {
  return (
    <div className="heading mb-6 flex gap-2.5">
      {text !== "Diplomas" && <GoBack href={hrefBack ?? ""} />}
      <header className="grow text-white bg-blue-600 p-4 flex items-center gap-4">
        {/* <GraduationCap size={45} /> */}
        {children}
        <h1 className=" font-semibold text-3xl">{text}</h1>
      </header>
    </div>
  );
}
