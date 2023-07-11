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
      <div>
        <div>
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
        <div>
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
        <div>
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
