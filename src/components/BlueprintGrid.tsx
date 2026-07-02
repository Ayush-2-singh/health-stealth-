interface BlueprintGridProps {
  className?: string;
  variant?: "standard" | "engineering";
}

export default function BlueprintGrid({ className = "", variant = "engineering" }: BlueprintGridProps) {
  return (
    <div
      aria-hidden="true"
      className={"absolute inset-0 pointer-events-none " + (variant === "engineering" ? "blueprint-grid" : "grid-bg") + " " + className}
    />
  );
}