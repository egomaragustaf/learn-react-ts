export default function FormProduct() {
  return (
    <form>
      <div>
        <div>
          <label htmlFor="productName">Shoe Name</label>
          <input
            type="text"
            name="productName"
            placeholder="Shoe Name"
            className="text-black px-2 py-1"
          />
        </div>
        <div>
          <label htmlFor="productColor">Shoe Color</label>
          <input
            type="text"
            name="productColor"
            placeholder="Shoe Color"
            className="text-black px-2 py-1"
          />
        </div>
        <div>
          <label htmlFor="productPrice">Shoe Price</label>
          <input
            type="text"
            name="productPrice"
            placeholder="Shoe Price"
            className="text-black px-2 py-1"
          />
        </div>
      </div>
    </form>
  );
}
