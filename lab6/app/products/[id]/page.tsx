interface Props {
  params: { id: string }
}

export default function ProductDetail({ params }: Props) {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">
        Product Detail — ID: {params.id}
      </h1>
    </div>
  );
}
