export default function Homepage() {
  return (
    <div className="mt-16 w-1/2 mx-auto">
      <h1 className="text-4xl my-4 font-black">Hello there...</h1>
      <h2 className="text-2xl my-3 font-medium">
        Create a <span className="text-pink-500">text field</span> that be
        composed with <span className="text-blue-500">label</span> and/or a{" "}
        <span className="text-green-500">validator</span>.
      </h2>

      <ul className="list-disc ml-8 flex flex-col gap-2">
        <li>
          The <span className="text-pink-500">text field</span> should not know
          about the internals of either the{" "}
          <span className="text-blue-500">label</span>
          or the <span className="text-green-500">validator</span>
        </li>
        <li>
          The <span className="text-blue-500">label</span> should not know about
          the internals of either the{" "}
          <span className="text-green-500">validator</span> or the{" "}
          <span className="text-pink-500">text field</span>
        </li>
        <li>
          The <span className="text-green-500">validator</span> should not know
          about the internals of either the{" "}
          <span className="text-blue-500">label</span> or the{" "}
          <span className="text-pink-500">text field</span>
        </li>
      </ul>
    </div>
  );
}
