export default function Shop({ children }) {
  return (
    <section id="shop">
      <h2>For the Love of Ceramics. Handmade for you in Portugal</h2>

      <ul id="products">
        {children}
      </ul>
    </section>
  );
}
