const cartItems = [
  { id: 1, name: 'Coussin Velours', price: 25, quantity: 2 },
  { id: 2, name: 'Rideau Lin', price: 80, quantity: 1 },
];

const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
const shipping = 10;
const total = subtotal + shipping;

export default function PanierPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Votre Panier</h1>
      <div className="bg-white rounded-lg shadow-md p-8">
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-600">Quantité : {item.quantity}</p>
            </div>
            <p className="text-xl font-semibold">{item.price * item.quantity} €</p>
          </div>
        ))}
        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="text-lg">Sous-total</p>
          <p className="text-lg">{subtotal} €</p>
        </div>
        <div className="flex justify-between">
          <p className="text-lg">Livraison</p>
          <p className="text-lg">{shipping} €</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="text-xl font-bold">Total</p>
          <p className="text-xl font-bold">{total} €</p>
        </div>
        <button className="bg-gray-800 text-white font-bold py-3 px-6 rounded-lg w-full mt-8 hover:bg-gray-700 transition-colors">Valider la commande</button>
      </div>
    </div>
  );
}
