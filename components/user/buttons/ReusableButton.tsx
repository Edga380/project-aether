"use client";

type ReusableButtonProps = {
  name: string;
};

export default function ReusableButton(props: ReusableButtonProps) {
  return (
    <button className="bg-midTeal text-lightTeal font-semibold px-6 py-1 rounded hover:bg-lightTeal hover:text-midTeal hover:shadow-md">
      {props.name}
    </button>
  );
}
