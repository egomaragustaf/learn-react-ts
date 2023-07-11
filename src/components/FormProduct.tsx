interface FormProductProps {
  formData: {
    id: number;
    name: string;
    color: string;
    price: number;
  };
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent) => void;
}

export default function FormProduct({
  formData,
  onInputChange,
  onSubmit,
}: FormProductProps) {
  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-2 w-full max-w-xs bg-slate-700 rounded p-4">
        <div className="flex w-full justify-between items-center">
          <label htmlFor="productName">Shoe Name</label>
          <input
            type="text"
            name="name"
            placeholder="Shoe Name"
            className="text-black px-2 py-1"
            value={formData.name}
            onChange={onInputChange}
          />
        </div>
        <div className="flex w-full justify-between items-center">
          <label htmlFor="productColor">Shoe Color</label>
          <input
            type="text"
            name="color"
            placeholder="Shoe Color"
            className="text-black px-2 py-1"
            value={formData.color}
            onChange={onInputChange}
          />
        </div>
        <div className="flex w-full justify-between items-center">
          <label htmlFor="productPrice">Shoe Price</label>
          <input
            type="text"
            name="price"
            placeholder="Shoe Price"
            className="text-black px-2 py-1"
            value={formData.price}
            onChange={onInputChange}
          />
        </div>
      </div>
    </form>
  );
}
