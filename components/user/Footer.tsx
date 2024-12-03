export default async function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="flex justify-between bg-lighterGreyTeal h-20 p-2 border-t-2 border-lightGreyTeal">
      <p className="m-auto font-semibold">Project Aether. Copyright {year}</p>
    </div>
  );
}
